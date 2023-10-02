let numerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;


//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'O Jogo do Número Secreto');
    exibirTexto('p', 'Escolha um número de 1 a 10:');
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = numerosSorteados.length;

    if(quantidadeDeElementos == numeroLimite){
        numerosSorteados = []
    }

    if(numerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function verificarChute() {
    console.log(numeroSecreto);
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Voce usou ${tentativas} ${palavraTentativa}! Que tal tentar novamente?`;

        exibirTexto('h1', 'acertou!');
        exibirTexto('p', mensagemTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (chute < numeroSecreto) {
        exibirTexto('p', 'O número secreto é maior');

    } else {
        exibirTexto('p', 'O número secreto é menor');
    }

    tentativas++;

    limparCampo();
}

exibirMensagemInicial();

