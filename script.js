const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.querySelector('span').textContent=open?'−':'＋';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.querySelector('span').textContent='＋';}));}
const lightbox=document.querySelector('.lightbox');const lightboxImage=lightbox?.querySelector('img');
document.querySelectorAll('.photo-button[data-full]').forEach(button=>button.addEventListener('click',()=>{if(!lightbox||!lightboxImage)return;lightboxImage.src=button.dataset.full;lightboxImage.alt=button.querySelector('img')?.alt||'Portfolio photograph';lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');}));
function closeLightbox(){if(!lightbox)return;lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');if(lightboxImage)lightboxImage.src='';}
lightbox?.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});

const musicButton=document.querySelector('.music-toggle');
const siteMusic=document.querySelector('#site-music');
if(musicButton&&siteMusic){
  siteMusic.volume=0.35;
  musicButton.addEventListener('click',async()=>{
    if(siteMusic.paused){
      try{await siteMusic.play();musicButton.setAttribute('aria-pressed','true');musicButton.setAttribute('aria-label','Pause background music');musicButton.querySelector('.music-label').textContent='Pause music';}
      catch(error){musicButton.setAttribute('aria-pressed','false');musicButton.querySelector('.music-label').textContent='Music unavailable';}
    }else{
      siteMusic.pause();musicButton.setAttribute('aria-pressed','false');musicButton.setAttribute('aria-label','Play background music');musicButton.querySelector('.music-label').textContent='Play music';
    }
  });
}
