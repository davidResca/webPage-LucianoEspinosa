const bioContainer = document.querySelector('#bio');
const chevronBio = document.querySelector('#main-chevron-bio');

chevronBio.addEventListener('mouseover', (e)=>{
    bioContainer.classList.toggle('translate-bio-up');
})
