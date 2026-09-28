const inputCUP = document.getElementById('inputCPU');
const inputMemoria = document.getElementById('inputMemoria');
const inputTemp = document.getElementById('inputTemp');

const retornoCPU = document.getElementById('retornoCPU');
const retornoMemoria = document.getElementById('retornoMemoria');
const retornoTemp = document.getElementById('retornoTemp');

function verificarCPU() {
    const CPU = Number(inputCUP.value);

    if (CPU <= 60) {
        retornoCPU.innerHTML = `CPU: ${CPU}% — Normal`
        retornoCPU.style.backgroundColor = 'green'
        retornoCPU.style.color = 'white'
    }

    else if (CPU >= 61 && CPU <= 85) {
        retornoCPU.innerHTML = `CPU: ${CPU}% - Atenção`
        retornoCPU.style.backgroundColor = '#f8c025'
        retornoCPU.style.color = 'white'
    }

    else {
        retornoCPU.innerHTML = `CPU: ${CPU}% - Crítico`
        retornoCPU.style.backgroundColor = '#f82525'
        retornoCPU.style.color = 'white'
    }

}

function verificarMemoria() {
    const memoria = Number(inputMemoria.value)

    if (memoria <= 70) {
        retornoMemoria.innerHTML = `Memória: ${memoria}% - Normal`
        retornoMemoria.style.backgroundColor = 'green'
        retornoMemoria.style.color = 'white'
    }

    else if (memoria >= 71 && memoria <= 90) {
        retornoMemoria.innerHTML = `Memória: ${memoria}% - Atenção`
        retornoMemoria.style.backgroundColor = '#f8c025'
        retornoMemoria.style.color = 'white'
    }

    else {
        retornoMemoria.innerHTML = `Memória: ${memoria}% - Crítico`
        retornoMemoria.style.backgroundColor = '#f82525'
        retornoMemoria.style.color = 'white'
    }

}
function verificarTemp() {
    const temperatura = Number(inputTemp.value) 

    if (temperatura <= 65) {
        retornoTemp.innerHTML = `Temperatura: ${temperatura}° - Normal`
        retornoTemp.style.backgroundColor = 'green'
        retornoTemp.style.color = 'white'
    }

    else if (temperatura >= 66 && temperatura <= 80) {
        retornoTemp.innerHTML = `Temperatura: ${temperatura}° - Atenção`
        retornoTemp.style.backgroundColor = '#f8c025'
        retornoTemp.style.color = 'white'
    }

    else {
        retornoTemp.innerHTML = `Temperatura: ${temperatura}° - Crítico`
        retornoTemp.style.backgroundColor = '#f82525'
        retornoTemp.style.color = 'white'
    }

}

function reiniciarServ() {
    inputCUP.innerText = "CPU:";
    inputMemoria.innerText = "Memória:";
    inputTemp.innerText = "Temperatura:";
    retornoCPU.innerHTML = " ";
    retornoCPU.style.backgroundColor = ' rgb(248, 248, 248)'
    retornoMemoria.innerHTML = " ";
    retornoMemoria.style.backgroundColor = ' rgb(248, 248, 248)'
    retornoTemp.innerHTML = " ";
    retornoTemp.style.backgroundColor = ' rgb(248, 248, 248)'
}