const cardBtn = document.querySelectorAll('button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner'); 

function handleCardBtnClick (e) {
    const btn = e.currentTarget;
    const card = btn.closest('.card');
    const imgSrc = card.querySelector('img').src;
    const description = card.dataset.description;
    const name= card.querySelector('h2').textContent;
    modalInner.innerHTML = `
        <img widht="600" height="600" src="${imgSrc.replace('200', '600')}" alt="${name}"/>
        <p>${description}</p>
    `;
    modalOuter.classList.add('open');
}

function closeModal () {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(e) {
    const isOutside = !e.target.closest('.modal-inner'); 
    if(isOutside){
        closeModal();
    }
});

cardBtn.forEach(btn => btn.addEventListener('click', handleCardBtnClick));

//keycode.info
window.addEventListener('keydown', (e)=>{
    if(e.key==='Escape'){
        closeModal();
    }
})