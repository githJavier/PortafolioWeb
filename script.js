const btn = document.getElementById('button');
const btnTema = document.getElementById('btnTema')
const sectionAll = document.querySelectorAll('section[id]');
const inputName = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const flagsElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll('[data-section]');

/* ===== Loader =====*/
window.addEventListener('load', () => {
    const contenedorLoader = document.querySelector('.container--loader');
    contenedorLoader.style.opacity = 0;
    contenedorLoader.style.visibility = 'hidden';
})

/*===== Header =====*/
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('abajo', window.scrollY > 0);
});

/*===== Boton Menu =====*/
btn.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
        this.classList.add('not-active');
        document.querySelector('.nav_menu').classList.remove('active');
        document.querySelector('.nav_menu').classList.add('not-active');
    }
    else if((this.classList.contains('not-active'))){
        this.classList.add('active');
        this.classList.remove('not-active');
        document.querySelector('.nav_menu').classList.remove('not-active');
        document.querySelector('.nav_menu').classList.add('active');
    }
});

/*===== Cambio de idioma =====*/
const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
}

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
})

/*===== class active por secciones =====*/
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sectionAll.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.add('active');
        }
        else {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
});

/*===== Boton y función ir arriba =====*/
window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container').classList.add('show');
    }
    else {
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/*==== Boton y función de tema claro*/
btnTema.addEventListener('click', function(){
    document.querySelector('#header-main').classList.remove('header');
    document.querySelector('#header-main').classList.add('header-light');

    document.querySelector('#nav-menu-main').classList.remove('nav_menu');
    document.querySelector('#nav-menu-main').classList.remove('active');
    document.querySelector('#nav-menu-main').classList.add('nav_menu_light');
    document.querySelector('#nav-menu-main').classList.add('not-active');

    document.querySelector('#home').classList.remove('home');
    document.querySelector('#home').classList.add('home_light');

    document.querySelector('#home_text-1').classList.remove('home_text-1');
    document.querySelector('#home_text-1').classList.add('home_text-1_light')

    document.querySelector('#home_text-2').classList.remove('home_text-2');
    document.querySelector('#home_text-2').classList.add('home_text-2_light');

    document.querySelector('#home_text-3').classList.remove('home_text-3');
    document.querySelector('#home_text-3').classList.add('home_text-3_light');

    document.querySelector('#home_text-3').classList.remove('text-type');
    document.querySelector('#home_text-3').classList.add('text-type_light');
    
    document.querySelector('#container-info').classList.remove('container_parrafo-info');
    document.querySelector('#container-info').classList.add('container_parrafo-info_light');
    
    document.querySelector('#btn_cv').classList.remove('cv_button');
    document.querySelector('#btn_cv').classList.add('cv_button_light');

    document.querySelector('#icons-clear').classList.remove('icons-none');
    document.querySelector('#icons-dark').classList.add('icons-none');

    document.querySelector('#sobreMi').classList.remove('sobreMi');
    document.querySelector('#sobreMi').classList.add('sobreMi-light');

    document.querySelector('#texto_sobreMi').classList.remove('texto_sobreMi');
    document.querySelector('#texto_sobreMi').classList.add('texto_sobreMi-light');

    document.querySelector('#habilidades').classList.remove('habilidades');
    document.querySelector('#habilidades').classList.add('habilidades-light');

    document.querySelector('#go-top-button').classList.remove('go-top-button');
    document.querySelector('#go-top-button').classList.add('go-top-button-light');

    document.querySelector('#formacion').classList.remove('formacion');
    document.querySelector('#formacion').classList.add('formacion-light');

    document.querySelector('#proyectos').classList.remove('proyectos');
    document.querySelector('#proyectos').classList.add('proyectos-light');

    document.querySelector('#contacto').classList.remove('contacto');
    document.querySelector('#contacto').classList.add('contacto-light');

    document.querySelector('#footer').classList.remove('footer');
    document.querySelector('#footer').classList.add('footer-light');

    document.querySelector('#footer-container').classList.remove('container--footer');
    document.querySelector('#footer-container').classList.add('container--footer-light');

    document.querySelector('#container-text-footer').classList.remove('container_text--footer');
    document.querySelector('#container-text-footer').classList.add('container_text--footer-light');

    document.querySelector('#icon-light').classList.add('container-icon-light')
    document.querySelector('#icon-light').classList.remove('container-icon-none');
    document.querySelector('#icon-dark').classList.add('container-icon-none');
    document.querySelector('#icon-dark').classList.remove('container-icon-dark');

    btn.classList.remove('');


    
});
