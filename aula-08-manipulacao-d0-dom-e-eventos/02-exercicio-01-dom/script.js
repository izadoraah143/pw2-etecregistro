const yellow = window.document.getElementById('yellow');
const green = window.document.getElementById('green');
const red = window.document.getElementById('red');

const parar = window.document.getElementById('parar')
const atencao = window.document.getElementById('atencao')
const prosseguir = window.document.getElementById('prosseguir')

function clicarParar() {
    red.style.backgroundColor = '#ff0000'
    yellow.style.backgroundColor = 'gray'
    green.style.backgroundColor = 'gray'
}

function clicarAtencao() {
    yellow.style.backgroundColor = '#ffee00'
    green.style.backgroundColor = 'gray'
    red.style.backgroundColor = 'gray'
}

function clicarProsseguir() {
    green.style.backgroundColor = '#00fd15'
    red.style.backgroundColor = 'gray'
    yellow.style.backgroundColor = 'gray'
}

parar.addEventListener ('click', clicarParar)
atencao.addEventListener ('click', clicarAtencao)
prosseguir.addEventListener ('click', clicarProsseguir)


