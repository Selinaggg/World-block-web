/** Owns only the recoverable draft and playback clock; the store owns the live world. */
export class ExampleSession {
  constructor({apply,onStep,onComplete,schedule=(fn,ms)=>setTimeout(fn,ms),unschedule=id=>clearTimeout(id)}){
    Object.assign(this,{apply,onStep,onComplete,schedule,unschedule});
    this.backup=null;this.example=null;this.playing=false;this.revision=0;this.timer=null;
  }
  start(example,draft,{instant=false}={}){
    this.cancel();
    if(!this.backup)this.backup=structuredClone(draft);
    this.example=example;this.playing=true;
    const revision=this.revision;
    if(instant){this.skip();return;}
    this.apply({version:1,inputMode:'web',blocks:[]});
    let index=0;
    const tick=()=>{
      if(revision!==this.revision||!this.playing)return;
      if(index===example.steps.length){this.finish();return;}
      const step=example.steps[index++];this.apply(structuredClone(step.world));this.onStep(step.caption,index,example.steps.length);
      this.timer=this.schedule(tick,1100);
    };
    tick();
  }
  finish(){if(!this.playing)return;this.cancel();this.onComplete();}
  skip(){if(!this.playing)return;this.apply(structuredClone(this.example.world));this.finish();}
  cancel(){this.revision++;if(this.timer!==null)this.unschedule(this.timer);this.timer=null;this.playing=false;}
  restore(){this.cancel();const draft=this.backup;this.backup=null;this.example=null;return draft?structuredClone(draft):null;}
}
