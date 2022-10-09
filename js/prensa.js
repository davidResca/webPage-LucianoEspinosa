const $prensaCont = document.querySelector('#press-container');

const printPress = (arts) => {
    arts.forEach((art) => {
        /* console.log(art); */

        const article = document.createElement('article');
        article.classList.add('press-card');

        const link =`<a class="link-press" target='_blank' href="${art.link}">${art.nombre}</a>
                    <hr>`

        article.innerHTML = link;

        $prensaCont.appendChild(article);
    })
}


printPress(prensaArticulos);