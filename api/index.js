'use strict';

let baseUrl = 'https://rickandmortyapi.com/api/character/';
const addMore = document.querySelector('#more'),
      backdrop = document.querySelector('.backdrop'),
      closeBtn = document.querySelector('button[data-action="close-modal"]'),
      modal = document.querySelector('.modal-content');

const replaceUrl = function (data){
    const next = data.info.next;
    return baseUrl = next;
}

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
        })
        .then(info => {
            const characterInfo = Array.from(document.querySelectorAll('.char-card'));

            characterInfo.forEach(char => 
                char.addEventListener('click', function(e){
                    const target = e.target;
                    backdrop.classList.add('show');

                    const charInfo = {
                        name: this.children[0].textContent,
                        img: this.children[1].children[0].outerHTML
                    }

                    modal.insertAdjacentHTML('afterbegin', 
                    `<div class="modal-img">
                        ${charInfo.img}
                    </div>
                    <div class="modal-info">${charInfo.name}</div>
                    `);
                }));
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
        </div>`);
    document.querySelector('.characters').insertAdjacentHTML('beforeend', charactersList.join(''));
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
