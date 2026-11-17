// COSMIC PHENOMENA — shared interactions
document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.main-nav');
  if(toggle&&nav) toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰';});
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const target=document.querySelector(a.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}}));
  const reveal=document.querySelectorAll('.topic-card,.fact,.content-panel,.info-panel');
  if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});reveal.forEach(el=>{el.style.opacity='0';el.style.transform='translateY(14px)';el.style.transition='opacity .6s ease, transform .6s ease';observer.observe(el);});}
  document.querySelectorAll('.range-control').forEach(input=>input.addEventListener('input',()=>{const output=document.getElementById(input.dataset.output);if(output)output.textContent=input.value;}));
});
