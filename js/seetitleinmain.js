const titulo = document.querySelector('#header-title');



if(window.innerWidth >= 1224) {
    titulo.classList.add('display-none');
} else {
    titulo.classList.remove('display-none');
}


addEventListener('resize', (e) => {
    if(window.innerWidth >= 1224) {
        titulo.classList.add('display-none');
    } else {
        titulo.classList.remove('display-none');
    }
});


