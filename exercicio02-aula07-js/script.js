const nome = window.prompt('Digite seu nome: ');
const anoNasc = Number(window.prompt('Digite seu ano de nascimento: '));
const cidade = window.prompt('Digite a cidade em que você mora: ');
const salario = Number(window.prompt('Digite seu salário em Real: '));

const salarioD = salario*0.19;
const salarioE = salario*0.17;
const idade = 2026-anoNasc;

document.write(`Seu nome é: <strong>${nome.toUpperCase()}</strong> <br>`);
document.write(`Sua idade é: <strong>${idade}</strong> <br>`);
document.write(`A cidade em que você mora: <strong>${cidade.toUpperCase()}</strong> <br>`);
document.write(`A quantidade de caracteres da sua cidade é: <strong>${cidade.length}</strong> <br>`);
document.write(`Seu salário em Real: <strong>${salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</strong> <br>`);
document.write(`Seu salário em Dólar: <strong>${salarioD.toLocaleString('pt-br', {style: 'currency', currency: 'USD'})}</strong> <br>`);
document.write(`Seu salário em Euro: <strong>${salarioE.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'})}</strong> <br>`);
