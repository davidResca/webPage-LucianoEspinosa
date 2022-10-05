const collapsibleMenu = document.querySelector("#collapsible-menu");
const btnMenuClose = document.querySelector("#btn-menu-close");
const btnBurger = document.querySelector("#btn-burger");
const mainTitle = document.querySelector('#header-title')
const mainIcons = document.querySelector('.header-btn-container')


const showMenu = (e) => {
    collapsibleMenu.classList.toggle('nav-collapsible-open');
    mainTitle.classList.toggle('header-title-dark');
    mainIcons.classList.toggle('header-btn-container-open');
}

btnBurger.addEventListener('click', showMenu);

const $prensaCont = document.querySelector('#press-container');

const printPress = (arts) => {
    arts.forEach((art) => {
        console.log(art);

        const article = document.createElement('article');
        article.classList.add('press-card');

        const link =`<a class="link-press" target='_blank' href="${art.link}">${art.nombre}</a>
                    <hr>`

        article.innerHTML = link;

        $prensaCont.appendChild(article);
    })
}


printPress(prensaArticulos);