const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.querySelector('span').textContent=open?'−':'＋';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.querySelector('span').textContent='＋';}));}
const lightbox=document.querySelector('.lightbox');const lightboxImage=lightbox?.querySelector('img');
document.querySelectorAll('.photo-button').forEach(button=>button.addEventListener('click',()=>{if(!lightbox||!lightboxImage)return;lightboxImage.src=button.dataset.full;lightboxImage.alt=button.querySelector('img')?.alt||'Portfolio photograph';lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');}));
function closeLightbox(){if(!lightbox)return;lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');if(lightboxImage)lightboxImage.src='';}
lightbox?.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});
