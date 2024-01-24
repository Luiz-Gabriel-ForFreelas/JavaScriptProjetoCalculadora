function calcular(tipo, valor) {

    var tela = document.getElementById('resultado')

    if (tipo === 'acao'){

        if(valor === 'c') {
            tela.value = ''
        }

        if(valor === '+' || valor === '-' || valor === '/' || valor === '.' || valor === '*') {
            tela.value += valor
        }

        if(valor === '=') {
            var calculo = tela.value
            tela.value = eval(calculo)
        }

    } else {
        tela.value += valor
    }
}