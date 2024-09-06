const form = document.querySelector('form');
const btn = document.querySelector('#btn');
const input = document.querySelector('#todo');
const exersize = document.querySelector('#exersize');

btn && btn.addEventListener(`click`, function(e) {
    e.preventDefault();

    const p = document.createElement('p');
    p.innerText = input.value;

    p.style.border = '1px solid black';
    p.style.borderRadius = '5px';
    p.style.width = 'auto';
    exersize.append(p);
})