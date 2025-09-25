document.addEventListener('DOMContentLoaded', function () {
    const botao = document.getElementById('botao-acessibilidade');
    const opcoes = document.getElementById('opcoes-acessibilidade');

    opcoes.style.display = 'none';

    botao.addEventListener('click', function () {
        if (opcoes.style.display === 'none') {
            opcoes.style.display = 'flex';
        } else {
            opcoes.style.display = 'none';
        }
    });

    let tamanho = 1;

    document.getElementById('aumentar-fonte').addEventListener('click', function () {
        tamanho += 0.1;
        document.body.style.fontSize = `${tamanho}rem`;
    });

    document.getElementById('diminuir-fonte').addEventListener('click', function () {
        tamanho -= 0.1;
        document.body.style.fontSize = `${tamanho}rem`;
    });
});