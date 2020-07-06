//modal

const 
    openModalBtn = document.querySelector('button[data-action="js-open-modal"]'),
    page = document.querySelector('.page'),
    closeModalBtn = document.querySelectorAll('button[data-action="js-close-modal"]');

//handlers for btns
openModalBtn.addEventListener('click', toggleModal);

closeModalBtn.forEach(function(btn) {
    btn.addEventListener('click', toggleModal);
});

function handleESCBtn(e){
    if(e.code === 'Escape'){
        window.removeEventListener('keydown', handleESCBtn);
        page.classList.remove('show-modal');
    }
};

function toggleModal(){
    page.classList.toggle('show-modal');
    
    if(page.classList.contains('show-modal')){
        //handler for Escape
        window.addEventListener('keydown', handleESCBtn);
    }
};

//delegation

const 
    jsNoteEditor = document.querySelector('.js-note-editor'),
    input = jsNoteEditor.querySelector('input'),
    noteList = document.querySelector('.note-list');

jsNoteEditor.addEventListener('submit', handleSubmit);
noteList.addEventListener('click', handleNoteListClick);

function handleSubmit(e){
    e.preventDefault();
    
    const inputValue = input.value;
    const mark =  createNoteMarkup(inputValue);

    noteList.insertAdjacentHTML("afterbegin", mark);

    jsNoteEditor.reset();    
};

function handleNoteListClick(e){
    const nodeName = e.target.nodeName; 
    if(nodeName === 'BUTTON') { 
        const parent = e.target.parentNode;
        parent.remove();
    };

    // console.log(nodeName);
    
}

function createNoteMarkup(text){
    return `<li class="note">
                <p>${text}</p>
                <button>delete</button>
            </li>`;
};

