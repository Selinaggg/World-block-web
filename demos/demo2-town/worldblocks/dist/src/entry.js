/** Home and workspace share one document, so visiting Home never discards a draft. */
const home=document.querySelector('#home-page'),images=[...document.querySelectorAll('.home-image')];
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
let current=0,timer=null,workspacePromise=null;
const isStudio=()=>location.hash==='#studio'||(location.hash!=='#home'&&new URL(location.href).searchParams.has('world'));
function stopSlides(){clearInterval(timer);timer=null;}
async function nextSlide(){
  if(document.hidden||document.body.dataset.page!=='home')return;
  const next=(current+1)%images.length,img=images[next];
  if(!img.src)img.src=img.dataset.src;
  try{await img.decode();}catch{return;}
  if(document.hidden||document.body.dataset.page!=='home'||reducedMotion.matches)return;
  images[current].classList.remove('is-current');img.classList.add('is-current');current=next;
}
function playSlides(){stopSlides();if(document.body.dataset.page==='home'&&!document.hidden&&!reducedMotion.matches)timer=setInterval(nextSlide,5000);}
function showPage(){
  const studio=isStudio();document.body.dataset.page=studio?'studio':'home';home.hidden=studio;home.inert=studio;
  document.querySelector('.site-header').inert=!studio;document.querySelector('main').inert=!studio;
  document.querySelector('#example-session').inert=!studio;
  window.dispatchEvent(new Event('worldblocks:pagechange'));playSlides();
  if(studio){
    if(!workspacePromise)workspacePromise=import('./app.js').catch(error=>{
      const loading=document.querySelector('#loading');if(loading)loading.textContent='The workspace could not load. Refresh to try again.';
      console.error(error);
    });
    // Let pointer navigation remain unfocused; Tab still reveals keyboard focus.
  }
}
window.addEventListener('hashchange',showPage);
window.addEventListener('pagehide',stopSlides);
document.addEventListener('visibilitychange',playSlides);
reducedMotion.addEventListener('change',playSlides);
showPage();
