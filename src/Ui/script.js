// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});