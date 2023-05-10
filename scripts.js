const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const quantidadeNumeros = numeros.length

const limites = [[2,5],[5,7],[7,11],[11,16]]
const quantidadeLimites = limites.length

const frequenciaAbsoluta = () => {

    let frequenciaAbsoluta = []

    for (let i = 0; i < quantidadeLimites; i++) {
        let counter = 0

        for (let j = 0; j < quantidadeNumeros; j++) {
            if (numeros[j] >= limites[i][0] && numeros[j] < limites[i][1]) {
                counter++
                
            }
        }

        frequenciaAbsoluta.push (counter)
    }

    return frequenciaAbsoluta
}


console.log("Frequência absoluta:", frequenciaAbsoluta())


const frequenciaAbsolutaAcumulada = () => {
    let frequenciaAbsolutaAcumulada = []

    frequenciaAbsolutaAcumulada[0] = frequenciaAbsoluta()[0]

    for (let i = 1; i < quantidadeLimites; i++) {
      let j = i - 1

      frequenciaAbsolutaAcumulada[i] = frequenciaAbsolutaAcumulada[j] + frequenciaAbsoluta()[i]
    }

    return frequenciaAbsolutaAcumulada
}

console.log("Frequência absoluta acumulada: ", frequenciaAbsolutaAcumulada())


const frequenciaRelativa = () => {
    let frequenciaRelativa = []
    
    for (let i = 0; i < quantidadeLimites; i++) {
        frequenciaRelativa.push(+((frequenciaAbsoluta()[i] * 100) / frequenciaAbsolutaAcumulada().pop()).toFixed(2))
    }
    
    return frequenciaRelativa
}

console.log("Frequência relativa: ", frequenciaRelativa())


const frequenciaRelativaAcumulada = () => {
    let frequenciaRelativaAcumulada = []
    
    frequenciaRelativaAcumulada[0] = frequenciaRelativa()[0]
    
    for (let i = 1; i < quantidadeLimites; i++) {
        let j = i - 1
        
        frequenciaRelativaAcumulada[i] = frequenciaRelativa()[i] + frequenciaRelativaAcumulada[j]
    }
    
    return frequenciaRelativaAcumulada
}

console.log("Frequencia relativa acumulada: ", frequenciaRelativaAcumulada())