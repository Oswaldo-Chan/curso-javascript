//prevenir event bubbling con delegation
const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')) {
        console.log('titulo');
    }
    if(e.target.classList.contains('precio')) {
        console.log('precio');
    }
});