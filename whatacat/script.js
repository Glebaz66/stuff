const pics = [
    './imgs/cat1.jpg',
    './imgs/cat2.jpg',
    './imgs/cat3.jpg',
    './imgs/cat4.jpg',
]

const text = [
    'awesome',
    'cool',
    'brilliant',
    'gourges',
]
// ======================================================
const btn = document.querySelector('.js-btn');

function getCat() {
    const randomCat = random(pics);
    const catMarkup = `<img src="${randomCat}">`;
    const img = document.querySelector('.js-img');

    img.innerHTML = catMarkup;
}

function getText() {
    const randomText = random(text);
    const textMarkup = randomText;
    const txt = document.querySelector('.js-text');
    const checkWidth = checkWindowWidth();

    if(checkWidth <= 500){
        txt.innerHTML = '<p>Here you go!</p>';
        txt.innerHTML += '<p>Your <span class="bld">' + textMarkup + '</span>' + ' ' + 'cat</p>';
    } else {
        txt.innerHTML = '<p>Here you go! Your' + ' ' + '<span class="bld">' + textMarkup + '</span>' + ' ' + 'cat</p>';
    }
}

function random(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}
btn.addEventListener('click', getCat);
btn.addEventListener('click', getText);

// ===========================================
// scroll

const scrollBar = document.querySelector('.js-scroll-bar');
const scrollBarContaine = document.querySelector('.progress-container');

function scrollAnimate() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const checkCoords = checkCoordinates();
    if(!checkCoords){
        scrollBarContaine.style.display = 'block'; 
        scrollBar.style.width = (winScroll / height) * 100 + '%';
    } else {
        scrollBarContaine.style.display = 'none';    

    }
};
window.addEventListener('scroll', scrollAnimate);

// ==========================================
// menu

const menuBtn = document.querySelector('.js-open-menu');

const toggleMenu = function(){
    const nav = document.querySelector('.nav').classList.toggle('nav-open');
    menuBtn.classList.toggle('hovered');
    
    const checkWidth = checkWindowWidth();
 
    if(checkWidth >= 500) {
        const section = document.querySelectorAll('.section');
        if(nav){
            section.forEach(el => el.classList.add('p-left'));
        } else {
            section.forEach(el => el.classList.remove('p-left'));
    
        }
    }
}

menuBtn.addEventListener('click', toggleMenu);

// ====================================================
//functions 

function checkCoordinates (){
    const starCoordinate = document.documentElement.getBoundingClientRect(); 
    if(starCoordinate.y === 0){
        return true;
    }
    return false;
}

function checkWindowWidth() {
    const winWidth = window.screen.width;
    return winWidth;
}