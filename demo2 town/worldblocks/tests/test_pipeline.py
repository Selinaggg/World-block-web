import sys
import tempfile
import time
import unittest
from pathlib import Path
from unittest.mock import patch
from PIL import Image
sys.path.insert(0, str(Path(__file__).parents[1] / 'server'))
from world_pipeline import Pipeline, adapt_layout
from partner import world_logic
from partner.style_prompts import should_skip_pass2


def payload():
    return {'worldState': {'version':1,'inputMode':'web','blocks':[
        {'id':'a','type':'earth','position':{'x':0,'y':.68,'z':0},'heightLevel':1},
        {'id':'b','type':'water','position':{'x':0,'y':1.9,'z':0},'heightLevel':3},
        {'id':'c','type':'human','position':{'x':1,'y':.68,'z':1},'heightLevel':1}]},
        'analysis':{'normalizedPositions':[{'id':'a','x':.35,'z':.4},{'id':'b','x':.35,'z':.4},{'id':'c','x':.6,'z':.65}]},'options':{'twoPass':True}}


def quick_package(pieces, positions):
    # Actual partner terrain/prompt math, a small mask keeps unit tests quick.
    with patch.object(world_logic, 'generate_control_map', wraps=lambda nodes,background_element: original_map(nodes,background_element,size=8,scale=1)):
        return world_logic.build_prompt_package(pieces,positions)
original_map=world_logic.generate_control_map


class PipelineTests(unittest.TestCase):
    def wait(self,pipeline,run):
        until=time.monotonic()+10
        while pipeline.get(run)['status']=='running' or pipeline.active:
            if time.monotonic()>until:self.fail('Pipeline did not finish')
            time.sleep(.01)
        return pipeline.get(run)

    def test_coordinates_order_height_and_continuous_movement(self):
        raw=payload();pieces,positions,_=adapt_layout(raw)
        self.assertEqual([p['z'] for p in positions],[0,1,0])
        self.assertEqual(positions[0]['slot'],positions[1]['slot'])
        self.assertNotEqual(positions[0]['slot'],positions[2]['slot'])
        self.assertAlmostEqual(positions[0]['x'],1.05)
        first=quick_package(pieces,positions)
        self.assertTrue(first['terrain_grammar']['mixed_features'])
        raw['analysis']['normalizedPositions'][0]['x']+=.001
        _,changed,_=adapt_layout(raw)
        self.assertNotEqual(positions[0]['x'],changed[0]['x'])
        node=world_logic.build_world_nodes(pieces,changed)
        self.assertTrue(any(n['x']==changed[0]['x'] and n['terrain_total']>0 for n in node))

    def test_physical_half_layer_support_and_unknown(self):
        raw=payload();raw['worldState']['inputMode']='physical';raw['worldState']['input']={'status':'live','connected':True,'issues':[]}
        for i,b in enumerate(raw['worldState']['blocks']):b['physical']={'columnId':'L05-test','layer':'L0.5','index':i};b['heightLevel']=i*2+2
        raw['worldState']['blocks'][0]['type']='support'
        _,positions,excluded=adapt_layout(raw)
        self.assertEqual(len(excluded),1);self.assertEqual(positions[0]['z'],1.5);self.assertEqual(positions[0]['stack_index'],1)
        self.assertTrue(all(p['kind']=='half' for p in positions))
        raw['worldState']['blocks'][0]['type']='unknown'
        with self.assertRaises(ValueError):adapt_layout(raw)
        raw['worldState']['blocks'][0]['type']='earth';raw['worldState']['input']['status']='offline'
        with self.assertRaises(ValueError):adapt_layout(raw)

    def test_failed_habitat_retains_partner_rule(self):
        raw=payload()
        for b in raw['worldState']['blocks']:b['type']='animal'
        pieces,positions,_=adapt_layout(raw);package=quick_package(pieces,positions)
        self.assertTrue(package['terrain_grammar']['failed_habitat']);self.assertTrue(should_skip_pass2(package))

    def test_missing_key_keeps_real_control_map_no_image_calls(self):
        with tempfile.TemporaryDirectory() as temp,patch('world_pipeline.settings',return_value={'key':'','sdk':True,'model':'fake'}):
            calls=[];pipeline=Pipeline(temp,image_generate=lambda **kw:calls.append(kw),control_builder=quick_package)
            job=self.wait(pipeline,pipeline.start(payload())['id'])
            self.assertEqual(job['status'],'needs_configuration');self.assertTrue(job['controlMapUrl']);self.assertFalse(calls)
            self.assertTrue((Path(temp)/job['id']/'animation_prompt.txt').exists())

    def test_two_pass_failure_retry_preserves_first_image_and_never_calls_video(self):
        with tempfile.TemporaryDirectory() as temp,patch('world_pipeline.settings',return_value={'key':'fake-secret','sdk':True,'model':'fake'}):
            calls=[]
            def provider(**kw):
                calls.append(kw)
                if len(calls)==2:raise RuntimeError('secret provider diagnostic')
                Image.new('RGB',(4,4),'green').save(kw['output_path']);return kw['output_path']
            pipeline=Pipeline(temp,image_generate=provider,control_builder=quick_package)
            raw=payload();job=pipeline.start(raw);raw['worldState']['blocks'][0]['type']='fire'
            result=self.wait(pipeline,job['id']);self.assertEqual(result['status'],'error')
            self.assertNotIn('secret',str(result));self.assertTrue(result['pass1Url'])
            self.assertFalse(result['videoEnabled']);self.assertEqual(len(calls),2)
            pipeline.retry(job['id']);result=self.wait(pipeline,job['id'])
            self.assertEqual(result['status'],'complete');self.assertEqual(len(calls),3)
            self.assertEqual(calls[0]['image_paths'][0].name,'control_map.png')
            self.assertEqual(calls[2]['image_paths'][0].name,'generated_world_pass1.png')
            self.assertNotIn('fake-secret',(Path(temp)/job['id']/'job.json').read_text())
            recovered=Pipeline(temp);self.assertEqual(recovered.get(job['id'])['status'],'complete')
            with self.assertRaises(KeyError):recovered.get('../secret')

if __name__=='__main__':unittest.main()
