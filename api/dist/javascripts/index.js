'use strict';

let baseUrl = 'https://rickandmortyapi.com/api/character/';

const addMore = document.querySelector('#more'),
      backdrop = document.querySelector('.backdrop'),
      closeBtn = document.querySelector('button[data-action="close-modal"]'),
      modal = document.querySelector('.modal-content');

const replaceUrl = function (data){
    const next = data.info.next;
    return baseUrl = next;
};

const showMore = function(){
    fetch(baseUrl)
        .then(res => {
            if(res.ok) {
                return res.json();
            }
        })
        .then(data => {
            //get characters and replace url to fetch characters from next page
            replaceUrl(data);
            createChatacter(data);
            //handle character card click and open modal, add character info in
            addModalInfo(data);
        })

        .catch(err => {
            console.log(err);
        })
};

const createChatacter = function (data){
    const characters = data.results;
    const charactersList = characters.map(char => 
        `<div class="char-card">
            <div class="char-name">
                <p>${char.name}</p>
            </div>
            <div class="char-img"><img src="${char.image}" alt="${char.name}" title="click to read info"></div>
            <div class="hidden">
                <div class="gender">${char.gender}</div>
                <div class="species">${char.species}</div>
                <div class="status">${char.status}</div>
                <div class="type">${char.type}</div>
                <div class="location">${char.location.name}
            </div>
            </div>
        </div>`);
    document.querySelector('#characters').insertAdjacentHTML('beforeend', charactersList.join(''));
};

const addModalInfo = function(data){
    const characterInfo = Array.from(document.querySelectorAll('.char-card'));

    characterInfo.forEach(char => char.addEventListener('click', function(){
        
        const info = char.querySelector('.hidden');

        backdrop.classList.add('show');

        const charInfo = {
            name: this.children[0].textContent,
            img: this.children[1].children[0].outerHTML,
            gender: info.children[0].textContent,
            species: info.children[1].textContent,
            status: info.children[2].textContent,
            type: info.children[3].textContent,
            location: info.children[4].textContent,
        }
        console.log(charInfo);
        
        modal.insertAdjacentHTML('afterbegin', 
            `<div class="modal-img">
                ${charInfo.img}
            </div>
            <div class="modal-info">
                <div class="modal-info-line">Name: ${charInfo.name}</div>
                <div class="modal-info-line">Gender: ${charInfo.gender}</div>
                <div class="modal-info-line">Species: ${charInfo.species}</div>
                <div class="modal-info-line">Status: ${charInfo.status}</div>
                <div class="modal-info-line">Type: ${charInfo.type === '' ? charInfo.type = 'no data' : charInfo.type}</div>
                <div class="modal-info-line">Location: ${charInfo.location}</div>
            </div>
        `);
    }));
}
addMore.addEventListener('click', showMore);
addMore.addEventListener('click', function(){
    addMore.textContent = "Load more";
    if (addMore.textContent === "Load more"){return};
});

const closeModal = function(e){
    const target = e.target;
    if(target.nodeName === 'BUTTON'){
        backdrop.classList.remove('show');
        modal.innerHTML = '';
    }
}
closeBtn.addEventListener('click', closeModal);