// JavaScript

// Capturando um elemento do DOM
// Não é recomendado usá-lo para estilização, e sim para interação

const titulo = window.document.getElementsByTagName('h1')[0] 
// Foi pela árvore dom desde a tag pai (window) e selecionou o 1º elemento h1 = [0]

titulo.innerText = "Fui alterado pelo JavaScript TT" 
// Altera o conteúdo do título
// Poderia ser usado para alterar o título quando o usuário fizer determinada coisa

titulo.style.color = 'yellow'
// Altera a cor do título

// tags de 1º nível como body
 const pagina = window.document.body
 pagina.style.backgroundColor = '#f88ce1'

 // Eventos
// Capturando a div 
const caixaMagica = window.document.getElementById('caixaMagica');

// Organixar vários eventos em funções

function entrada() {
    caixaMagica.innerText = 'Oi! :)'
    caixaMagica.style.backgroundColor = 'blue'
}

function saida(){
    caixaMagica.innerText = 'Tchau! :D'
    caixaMagica.style.backgroundColor = 'black'
}

function clicar(){
    caixaMagica.innerText = 'Clicou!'
    caixaMagica.style.backgroundColor = 'red'
}

// Escutando um evento só da caixa
// adicione um escutador de evento na caixa
caixaMagica.addEventListener ('mouseenter', entrada)
caixaMagica.addEventListener('mouseout', saida)
caixaMagica.addEventListener('click', clicar)


