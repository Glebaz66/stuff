const pics = {
    cats:[
    './imgs/cat1.jpg',
    './imgs/cat2.jpg',
    './imgs/cat3.jpg',
    './imgs/cat4.jpg',
    ],
    cocks:[
    './imgs/cock1.jpg',
    './imgs/cock2.jpg',
    './imgs/cock3.jpg',
    './imgs/cock4.jpg',
    ],
    dogs:[
    './imgs/dog1.jpg',
    './imgs/dog2.jpg',
    './imgs/dog3.jpg',
    './imgs/dog4.jpg',
    ],
}

const text = [
    'awesome',
    'cool',
    'brilliant',
    'gourges',
    'silly',
    'funny',
    'cozzy',
]
// ======================================================
const btn = document.querySelector('.js-btn'),
      title = document.querySelector('h1.title'),
      txt = document.querySelector('.js-text'),
      img = document.querySelector('.js-img');


function getPicture() {
    

    let randomPicture = null;
    

        //   img.innerHTML = '';
    if(title.textContent === 'What a cat'){
        randomPicture = random(pics.cats);
    } 
    else if(title.textContent === 'What a cock'){
        randomPicture = random(pics.cocks);
    }
    else if(title.textContent === 'What a dog'){
        randomPicture = random(pics.dogs);
    }
    else if(title.textContent === 'Whats your animal today'){
        return;
    }
    const imgMarkup = `<img src="${randomPicture}">`;
    img.innerHTML = '';

    setTimeout(() => {
        img.innerHTML = imgMarkup;
    }, 1500);
}

function getText() {
    const randomText = random(text),
          textMarkup = randomText,
          checkWidth = checkWindowWidth();
    let animal = null;

    
    txt.innerHTML = null;

    setTimeout(() => {
    
        if(checkWidth <= 500){
            if(title.textContent === 'What a cat'){
                animal = 'cat';
                txt.innerHTML = '<p>Here you go!</p>';
                txt.innerHTML += `<p>Your <span class="txt-animated">${textMarkup}</span> ${animal}</p>`;
            }
            else if(title.textContent === 'What a cock'){
                animal = 'cock';
                txt.innerHTML = '<p>Here you go!</p>';
                txt.innerHTML += `<p>Your <span class="txt-animated">${textMarkup}</span> ${animal}</p>`;
            }
            else if(title.textContent === 'What a dog'){
                animal = 'dog';
                txt.innerHTML = '<p>Here you go!</p>';
                txt.innerHTML += `<p>Your <span class="txt-animated">${textMarkup}</span> ${animal}</p>`;
            } 
            else if(title.textContent === 'Whats your animal today'){
                txt.innerHTML = '<p>Select animal from menu</p>';
            }
        } else {
            if(title.textContent === 'What a cat'){
                animal = 'cat';
                txt.innerHTML = `<p>Here you go! Your <span class="txt-animated">${textMarkup}</span> ${animal}</p>`;
            }
            else if(title.textContent === 'What a cock'){
                animal = 'cock';
                txt.innerHTML = `<p>Here you go! Your <span class="txt-animated">${textMarkup}</span> ${animal}</p>`;
            }
            else if(title.textContent === 'What a dog'){
                animal = 'dog';
                txt.innerHTML = `<p>Here you go! Your <span class="txt-animated">${textMarkup}</span> ${animal}</p>`;
            } 
            else if(title.textContent === 'Whats your animal today'){
                txt.innerHTML = '<p>Select animal from menu</p>';
            }
        }
    }, 1500);
}
function clear(){

}
function random(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

const catContent = document.querySelector('.nav-item[data-id="cat"]'),
      cockContent = document.querySelector('.nav-item[data-id="cock"]'),
      dogContent = document.querySelector('.nav-item[data-id="dog"]'),
      nav = Array.from(document.querySelector('.nav').children);

function changeAnimal(e){
    e.preventDefault();
    const target = e.target;

    // let textMarkup = randomText;
    let animal = null;

    
    txt.innerHTML = null;
    title.textContent = 'Selecting...';
    img.innerHTML = '';
    setTimeout(() => {
        txt.innerHTML = '<p class="txt-animated">click button</p>';
    }, 1500);
    setTimeout(() => {
        if(target.classList === 'js-btn'){ return;}
        
        if(this === catContent){
            title.textContent = 'What a cat';
                // txt.innerHTML += `<p>Your <span class="txt-animated">${textMarkup}</span> ${animal}</p>`;
        } else if (this === cockContent){
            title.textContent = 'What a cock';
            
        } else if (this === dogContent){
            title.textContent = 'What a dog';
        }
    }, 1500);
}

nav.forEach(el => el.addEventListener('click', changeAnimal));
btn.addEventListener('click', getPicture);
btn.addEventListener('click', getText);

// ===========================================
// scroll

const scrollBar = document.querySelector('.js-scroll-bar'),
      scrollBarContaine = document.querySelector('.progress-container');

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

const toggleMenu = function(e){
    e.stopPropagation();

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
const body = document.querySelector('body');

const closeMenu = function(e){
    const target = e.target;
    // other clicks close menu aswell
    const section = document.querySelectorAll('.section');
    const nav = document.querySelector('.nav');

    if(target.nodeName === 'svg' && target !== menuBtn) {
        return;
    }
    else if(target !== menuBtn ){
        nav.classList.remove('nav-open');
        section.forEach(el => el.classList.remove('p-left'));
        menuBtn.classList.remove('hovered');
    } 
}

menuBtn.addEventListener('click', toggleMenu);
body.addEventListener('click', closeMenu);

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

