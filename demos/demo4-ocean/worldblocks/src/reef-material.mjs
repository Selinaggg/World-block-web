import * as T from 'three';

// Object-space grain wraps the entire fused surface without UV seams.
export function reefMaterial(origin){
  const mat=new T.MeshStandardMaterial({color:'#698f91',roughness:1,metalness:0});
  mat.onBeforeCompile=shader=>{
    shader.uniforms.reefOrigin={value:new T.Vector3(origin.x*2.45,origin.y*2.45,origin.z*2.45)};
    shader.vertexShader='varying vec3 vReefStone;\nuniform vec3 reefOrigin;\n'+shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvReefStone=position+reefOrigin;');
    shader.fragmentShader=`varying vec3 vReefStone;
      float stoneHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
      float stoneNoise(vec3 p){
        vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
        return mix(mix(mix(stoneHash(i),stoneHash(i+vec3(1,0,0)),f.x),mix(stoneHash(i+vec3(0,1,0)),stoneHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(stoneHash(i+vec3(0,0,1)),stoneHash(i+vec3(1,0,1)),f.x),mix(stoneHash(i+vec3(0,1,1)),stoneHash(i+vec3(1,1,1)),f.x),f.y),f.z);
      }
      `+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
      float mineral=stoneNoise(vReefStone*2.7);
      float grit=stoneNoise(vReefStone*15.);
      float pores=smoothstep(.60,.84,stoneNoise(vReefStone*32.));
      diffuseColor.rgb*=.80+mineral*.30+grit*.06-pores*.10;
      diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(.82,1.04,.93),smoothstep(.53,.77,mineral)*.35);
    `);
    shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
      float relief=grit*.012+stoneNoise(vReefStone*65.)*.0025-pores*.008;
      vec3 sx=dFdx(-vViewPosition),sy=dFdy(-vViewPosition);
      vec3 r1=cross(sy,normal),r2=cross(normal,sx);
      float det=dot(sx,r1);
      vec3 gradient=sign(det)*(dFdx(relief)*r1+dFdy(relief)*r2);
      normal=normalize(abs(det)*normal-gradient);
    `);
  };
  mat.customProgramCacheKey=()=> 'porous-reef-v1';
  return mat;
}
