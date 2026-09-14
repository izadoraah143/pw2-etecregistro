// Coletando os elementos (ñ pega o valor)

// querySelector - melhor usar ele, captura id e classes
// capturando por id: tag#id da tag
const inputN1 = document.querySelector('input#inputN1');
const inputN2 = document.querySelector('input#inputN2');
const resultado = document.querySelector('div#resultado');

// Funções da calculadora
function somar(){
    /* captura o valor da inputN1 (valor na caixinha) e coloca na variável n1 
    (valor numérico) (o .value faz isso) */
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    const soma = n1 + n2;
    resultado.innerHTML = `A soma entre ${n1} e ${n2} é igual a <u><strong>${soma}</strong></u>.`;
}

// innerText - muda só string 
// innerHTML - consegue mudar números tmb

function limpar(){
    inputN1.value = "";
    inputN2.value = "";
    resultado.innerHTML = " = ";
}

function subtracao(){
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    const soma = n1 - n2;
    resultado.innerHTML = `A subtração entre ${n1} e ${n2} é igual a <u><strong>${soma}</strong></u>.`;
}

function multiplicacao(){
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    const soma = n1 * n2;
    resultado.innerHTML = `A multiplicação entre ${n1} e ${n2} é igual a <u><strong>${soma}</strong></u>.`;
}

function divisao(){
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    const soma = n1 / n2;
    resultado.innerHTML = `A divisão entre ${n1} e ${n2} é igual a <u><strong>${soma}</strong></u>.`;
}

