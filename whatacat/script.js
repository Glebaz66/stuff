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
    console.log(randomText);

    const textMarkup = randomText;
    const txt = document.querySelector('.js-text');
    txt.innerHTML = '<p>Here you go! Your' + ' ' + '<span class="bld">' + textMarkup + '</span>' + ' ' + 'cat</p>';
    
}

function random(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}
btn.addEventListener('click', getCat);
btn.addEventListener('click', getText);