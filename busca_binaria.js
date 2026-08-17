let contador=0
const Logica_binaria = (vetor, ponteiroMaior, ponteiroMenor, valor) => {
    const metade_posicao = Math.floor((ponteiroMaior + ponteiroMenor) / 2)
    console.log('menor', ponteiroMenor)
    console.log('valor', valor)
    console.log('maior', ponteiroMaior)
    console.log('posicao atual', metade_posicao)
    if (vetor.length % 2 === 0) {
        if (vetor[metade_posicao] === valor) {
            return console.log('valor escolhido',vetor[metade_posicao],'contador',contador+1)
        }
        else if (vetor[metade_posicao] > valor) {
            contador++
            Logica_binaria(vetor, metade_posicao, ponteiroMenor, valor)
        }
        else {
            contador++
            Logica_binaria(vetor, ponteiroMaior, metade_posicao, valor)
        }
    } else {
        const metade_posicao = Math.floor((ponteiroMaior + ponteiroMenor) / 2)
        if (vetor[metade_posicao] === valor) {
            return console.log('valor escolhido',vetor[metade_posicao],'contador',contador+1)
        }
        else if (vetor[metade_posicao] > valor) {
            Logica_binaria(vetor, metade_posicao, ponteiroMenor, valor)
        contador++
        }
        else {
            contador++
            Logica_binaria(vetor, ponteiroMaior, metade_posicao, valor)
        }
    }
}
const buscabinaria_nao_encadeada = async (vetor, valor) => {
    if (vetor.length <= 0) {
        return console.log('o vetor precisa pelo menos 3 indices')
    } else {
        let ponteiroMenor = 0
        let ponteiroMaior = vetor.length - 1
        if (valor === vetor[ponteiroMenor]) {
            return console.log(vetor[ponteiroMenor])
        }
        else if (valor === vetor[ponteiroMaior]) {
            return console.log(vetor[ponteiroMaior])
        }
        else {
            return await Logica_binaria(vetor, ponteiroMaior, ponteiroMenor, valor)
        }
    }
}
buscabinaria_nao_encadeada( Array.from({ length: 1000000 }, (_, i) => i),4)