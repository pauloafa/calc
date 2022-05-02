var resultado = document.getElementById("resultado");
var audio = new Audio('beep-06.wav');
var audiopower = new Audio('beep-04.wav');
var estado = 0;
let history = '';

// Esta função liga e desliga a calculadora
function energia() {
    audiopower.play();
    if (estado == 1) {
        resultado.style.backgroundColor = "black";
        resultado.value = "";
        estado = 0;
    } else {
        resultado.style.backgroundColor = "white";
        resultado.value = "";
        estado = 1;
    }
}

//Esta função beepa as teclas
function play() {
    audio.play();
}

// Esta função exibe valores + adiciona no historico
function display(value) {
    audio.play();
    resultado.value += value;
    addToHistory(value);
}

// Esta função limpa todos os valores + adiciona no historico
function limpar_tela() {
    audio.play();
    resultado.value = "";
    addToHistory("");
}

// Esta função avalia a expressão e retorna o resultado + adiciona no historico
function calculate() {
    audio.play();
    var p = resultado.value;
    var q = eval(p);
    resultado.value = q;
    addToHistory("=" + q + "\n");
}

// Esta função avalia o histórico
function addToHistory(value) {
    history += value;
    document.getElementById('history').innerText = history;
}