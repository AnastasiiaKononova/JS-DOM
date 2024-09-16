const showBtn = document.querySelector('#show-modal');
const closeBtn = document.querySelector('#close-modal');

const section = document.querySelector('.background');
const modal = document.querySelector('.modal-window');


function showModal() {
   
    section.style.display = 'flex';
    modal.style.display = 'block';
}

function closeModal() {
    section.style.display = 'none';
    modal.style.display = 'none';
}

showBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', closeModal);
section.addEventListener('click', closeHandler, true);

function closeHandler(event) {
    if (event.target === event.currentTarget) {
        closeModal();
    }
}

    function closeHandler(event) {
        if(event.target === event.currentTarget) {
            event.stopPropagation();
            closeModal();
        }
    }