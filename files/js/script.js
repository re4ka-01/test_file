let btnIcon = document.querySelector('.bell > img');
    modal = document.querySelector('.modal-popup');


btnIcon.addEventListener('click', () => {
    modal.classList.toggle('active');
})

let add = document.querySelector('.add_btn');

add.addEventListener('click', () => {
    let modal_bottom = document.querySelector('.footer-modal');

    modal_bottom.classList.toggle('active');
})
