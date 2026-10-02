/** Selection is independent of polling. Advance only when a new artifact arrives. */
export class StageView {
  constructor(){this.threeDResult=null;this.reset();}
  reset(){this.view='model';this.job=null;this.dirty=false;}
  update(job,{final=false}={}){
    const previous=this.job?.id===job.id?this.job:null;
    if(previous?.id!==job.id){this.view='model';this.dirty=false;}
    this.job=job;
    if((job.imageUrl&&!previous?.imageUrl)||(job.pass1Url&&!previous?.pass1Url))this.view='image';
    else if(job.controlMapUrl&&!previous?.controlMapUrl)this.view='control';
    if(final)this.view=job.imageUrl?'image':job.controlMapUrl?'control':'model';
  }
  setThreeD(result){this.threeDResult=result;this.view='three';}
  available(view){return view==='three'?!!this.threeDResult:view==='model'||view==='control'&&!!this.job?.controlMapUrl||view==='image'&&!!(this.job?.imageUrl||this.job?.pass1Url)||view==='video'&&!!this.job?.imageUrl;}
  select(view){if(!this.available(view))return false;this.view=view;return true;}
  get image(){return this.view==='control'?this.job?.controlMapUrl:this.job?.imageUrl||this.job?.pass1Url;}
}
