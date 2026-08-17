// JAVASCRIPT

// FORMATANDO STRINGS
const nome = window.prompt('Qual é o seu nome?')

// CONTANDO OS CARACTERES
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} caracteres. <br>`) /*<strong> </strong> para deixarc em negrito*/

// ALTERANDO PARA MAIÚSCULAS
document.write(`Seu nome em maiúsculas é: ${nome.toUpperCase()} <br>`)

// ALTERANDO PARA MINÚSCULAS
document.write(`Seu nome em maiúsculas é: ${nome.toLowerCase()} <br>`)


// FORMATANDO NÚMEROS
const salario = Number(window.prompt('Digite o seu salário: ')) //CONVERTER PARA NÚMERO Number()

// INSERINDO CASAS DECIMAIS 
document.write(`Seu salário com casas decimais é: ${salario.toFixed(2)} <br>`)

// ALTERANDO IDENTIFICADOR DE CASAS DECIMAIS 
document.write(`Seu salário com vírgula nas decimais é: ${salario.toFixed(2).replace('.' , ',')} <br>`) 

// FORMATAÇÃO DE MOEDA - só muda a formatação, não faz a conversão do valor
// REAL
document.write(`Seu salário em real: ${salario.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})} <br>`)

// DÓLAR
// Dólar em pt-br = US$ 90
// Dólar em inglês = $ 90
document.write(`Seu salário em dólar: ${salario.toLocaleString('en', {style: 'currency', currency:'USD'})} <br>`)


//EURO
document.write(`Seu salário em euro: ${salario.toLocaleString('es', {style: 'currency', currency:'EUR'})} <br>`)
