"Use strict";

const btn = document.querySelector('.btn'),
    block = document.querySelector('.block'),
    title = document.querySelector('.title');

let question = prompt('What your Name?', "");
btn.addEventListener('click', () => {    
    title.textContent = `Hello ${question}`;
    block.classList.toggle('active');
});

