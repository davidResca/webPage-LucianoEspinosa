const bioContainer = document.querySelector('#bio');
const chevronBio = document.querySelector('#main-chevron-bio');
const chevronIco = document.querySelector('.chevron-up')

chevronBio.addEventListener('click', (e)=>{
    bioContainer.classList.toggle('translate-bio-up');
    chevronIco.classList.toggle('rotate-chevron');
})

/* click outside bio */
window.addEventListener('click', (e)=>{
    if (!bioContainer.contains(e.target) && (!chevronBio.contains(e.target))){
        bioContainer.classList.remove('translate-bio-up');
        chevronIco.classList.remove('rotate-chevron');
    } 
})