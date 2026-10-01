/** Repeat a control while held. Capture on the stable container, not a child button. */
export function bindPressAndHold(container, onStep, {delay=350, interval=110}={}) {
  const selector=['raise','lower','left','right','front','back'].map(action=>`button[data-action="${action}"]`).join(', ');
  let timer=null, pointerId=null, key=null, activeButton=null;
  function stop(){
    clearTimeout(timer);timer=null;key=null;activeButton?.classList.remove('is-held');activeButton=null;
    const captured=pointerId;pointerId=null;
    if(captured!==null&&container.hasPointerCapture(captured))container.releasePointerCapture(captured);
  }
  function step(){
    if(!activeButton||!activeButton.isConnected||activeButton.disabled||onStep(activeButton.dataset.action)===false){stop();return false;}
    return true;
  }
  function repeat(){if(step())timer=setTimeout(repeat,interval);}
  function start(button){activeButton=button;button.classList.add('is-held');if(step())timer=setTimeout(repeat,delay);}
  container.addEventListener('pointerdown',event=>{
    const button=event.target.closest(selector);if(!button||button.disabled||event.button!==0||!event.isPrimary)return;
    event.preventDefault();stop();button.focus({preventScroll:true});pointerId=event.pointerId;
    container.setPointerCapture(pointerId);start(button);
  });
  container.addEventListener('pointermove',event=>{
    if(event.pointerId!==pointerId||!activeButton)return;
    const r=activeButton.getBoundingClientRect();
    if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)stop();
  });
  for(const event of ['pointerup','pointercancel','lostpointercapture'])container.addEventListener(event,stop);
  // Pointer steps already run on press. Keyboard/assistive clicks still use the normal click action.
  container.addEventListener('click',event=>{if(event.detail>0&&event.target.closest(selector)){event.preventDefault();event.stopImmediatePropagation();}},true);
  container.addEventListener('keydown',event=>{
    const button=event.target.closest(selector);if(!button||button.disabled||![' ','Enter'].includes(event.key))return;
    event.preventDefault();if(event.repeat)return;stop();key=event.key;start(button);
  });
  document.addEventListener('keyup',event=>{if(event.key===key){event.preventDefault();stop();}});
  container.addEventListener('focusout',event=>{if(event.target===activeButton)stop();});
  window.addEventListener('blur',stop);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
  return stop;
}
