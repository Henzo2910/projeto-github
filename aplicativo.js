deixe listaDeNumerosSorteados = [];
deixe numeroLimite = 30;
deixe numeroLimite = 40;
deixe numeroSecreto = gerarNumeroAleatorio();
deixe tentativas = 1;

função exibirTextoNaTela(tag, texto) {
    deixe campo = documento.querySelector(tag);
    campo.innerHTML = texto;
    responsivoVoz.speak(texto, 'Português Brasileiro Feminino', {rate:1.2});
}
função exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();
função verificarChute() {
    let chute = documento.querySelector('input').valor;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = 'Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!';
        exibirTextoNaTela('p', mensagemTentativas);
        documento.getElementById('reiniciar').removeAttribute('desabilitado');
    } mais {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } mais {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}
função gerarNumeroAleatorio() {
    deixe numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.comprimento;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.inclui(numeroEscolhido)) {
        retorno gerarNumeroAleatorio();
    } mais {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}
função limparCampo() {
    chute = documento.querySelector('input');
    calha.valor = '';
}
função reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    documento.getElementById('reiniciar').setAttribute('desabilitado', true)
}
