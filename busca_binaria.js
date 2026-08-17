const Logica_binaria=(vetor,ponteiroMaior,ponteiroMenor,valor)=>{
    console.log('bola')
    const PonteiroMaior=vetor.length-1
    if(vetor%2===0){
        const metade_posicao=vetor[ponteiroMaior/2] 
        if(metade_posicao===valor)
            {return metade_posicao}
        else if(metade_posicao>valor){
            Logica_binaria(vetor,PonteiroMaior,metade_posicao,valor)
        }
        else{Logica_binaria(vetor,metade_posicao,ponteiroMenor,valor)}
    }
    else{ 
         const metade_posicao=vetor[(ponteiroMaior/2)+1] 
        if(metade_posicao===valor)
            {return metade_posicao}
        else if(metade_posicao>valor){
            Logica_binaria(vetor,PonteiroMaior,metade_posicao,valor)
        }
        else{Logica_binaria(vetor,metade_posicao,ponteiroMenor,valor)}}
}
const buscabinaria_nao_encadeada=async(vetor,valor)=>{
    if(vetor.length<=0){
        return console.log('o vetor precisa pelo menos 3 indices')
    }else{
let ponteiroMenor=0
let ponteiroMaior=vetor.length-1
return await  Logica_binaria(vetor,ponteiroMaior,ponteiroMenor,valor) }}
buscabinaria_nao_encadeada([1,2,3,4],2)