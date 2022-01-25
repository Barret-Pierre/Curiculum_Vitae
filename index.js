// ********************************** Variables **********************************

// élements devant s'animer au scroll
const elementsSlideBottom = document.querySelectorAll(".on-scroll");

// éléments pour l'appartition du menu 
const menuNavigation = document.querySelector(".navbar");
const sectionSoft = document.querySelector(".section_soft");

// ********************************** Evènements **********************************

// Au scroll 
window.addEventListener('scroll', function (e) {


    // créer une constante récupérant les propritété de l'objet documentElement la position du haut de la page html et la hauteur de la partie visible de la fenêtre
    const { scrollTop, clientHeight } = document.documentElement;
    console.log(scrollTop, clientHeight);

    for (let element of elementsSlideBottom) {

        // donne la distance entre le haut de l'objet et celui du viewport
        const topElementToTopViewport = element.getBoundingClientRect().top;
        // getBoundingClientRect retourne un objet contenant les information sur la taille et la position de l'élément par rapport à la zone d'affichage ici on isolera la propriété top

        if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1) {
            element.classList.add("active");
        }
    }

    const topSectioSoftToTopViewport = sectionSoft.getBoundingClientRect().top;

    if (scrollTop > (scrollTop + topSectioSoftToTopViewport).toFixed()) {
        menuNavigation.classList.remove("desactive")
    } else {
        menuNavigation.classList.add("desactive");
    }
})