import hashlib
import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class PreservationTests(unittest.TestCase):
    def test_partner_content_is_preserved(self):
        manifest = json.loads((ROOT / 'docs/original-demo-hashes.json').read_text())
        for demo, files in manifest.items():
            for relative, expected in files.items():
                if relative == 'worldblocks/package.json':
                    continue
                with self.subTest(demo=demo, file=relative):
                    self.assertEqual(hashlib.sha256((ROOT / 'demos' / demo / relative).read_bytes()).hexdigest(), expected)

    def test_common_client_matches_all_original_clients(self):
        expected = (ROOT / 'shared/hardware-client/worldblocks-client.mjs').read_bytes()
        for file in (ROOT / 'demos').glob('*/worldblocks/dist/src/input/partner/worldblocks-client.mjs'):
            self.assertEqual(file.read_bytes(), expected)

    def test_mock_paths_exist(self):
        for demo in ('demo1-basic', 'demo2-town', 'demo3-particle'):
            file = ROOT / 'demos' / demo / 'worldblocks/package.json'
            data = json.loads(file.read_text())
            self.assertEqual(data['scripts']['dev'], 'python3 server/app.py')
            self.assertEqual(data['scripts']['test'], 'node --test tests/*.test.js')
            target = data['scripts']['mock:input'].removeprefix('python3 ')
            self.assertTrue((file.parent / target).is_file())
