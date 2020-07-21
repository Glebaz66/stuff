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

    const check = checkWindowWidth();
    if(check <= 500){
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

function scrollAnimate() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const check = checkCoordinates();
    if(!check){
        scrollBarContaine.style.display = 'block'; 
        scrollBar.style.width = (winScroll / height) * 100 + '%';
    } else {
        scrollBarContaine.style.display = 'none';    

    }
};
window.addEventListener('scroll', scrollAnimate);