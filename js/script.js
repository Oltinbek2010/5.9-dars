const username = document.getElementById('userName');
const password = document.getElementById('password');
const nation = document.getElementById('nationality');
const desc = document.getElementById('izoh');
const btn = document.getElementById('button');
const area = document.getElementById('blocks');
const form = document.querySelector('form')

btn && btn.addEventListener('click', function() {
    const block = document.createElement('pre');
    block.innerHTML = {
        Username: username.innerHTML,
        Password: password.innerHTML,
        Nationality: nation.innerHTML,
        Description: desc.innerHTML
    }
    block.style.backgroundColor = 'white';
    block.style.color = 'black';
    area.append(block);
    form.reset();
})
