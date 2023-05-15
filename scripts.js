const numeros = []
const quantidadeNumeros = numeros.length

const numerosFrequencia = [3, 5, 6, 9]
const quantidadeNumerosFrequencia = numerosFrequencia.length

const limites = [[2,4],[4,6],[6,8],[8,10]]
const quantidadeLimites = limites.length

let arrayNumerosFrequencia = []
let usarFrequencia = false
if (quantidadeNumeros === 0 && quantidadeNumerosFrequencia > 0) {
    usarFrequencia = true


    for (let i = 0; i < quantidadeLimites; i++) {
        for (let j = 0; j < numerosFrequencia[i]; j++) {
            arrayNumerosFrequencia.push(limites[i][0])
        }
    }
}

console.log("Array novo:", arrayNumerosFrequencia)

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

if (usarFrequencia === true) {
    console.log("Frequência absoluta:", frequenciaAbsoluta())
}


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

const frequenciaTotal = frequenciaAbsolutaAcumulada().pop()


const frequenciaRelativa = () => {
    let frequenciaRelativa = []
    
    for (let i = 0; i < quantidadeLimites; i++) {
        frequenciaRelativa.push(+((frequenciaAbsoluta()[i] * 100) / frequenciaTotal).toFixed(2))
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


const pontoMedio = () => {
    let pontoMedio = []

    for (let i = 0; i < quantidadeLimites; i++) {
        pontoMedio.push((limites[i][0] + limites[i][1]) / 2)
    }

    return pontoMedio
}

console.log("Ponto médio: ", pontoMedio())


const media = () => {
    let soma = 0

    for (let i = 0; i < quantidadeLimites; i++) {
        soma += frequenciaAbsoluta()[i] * pontoMedio()[i]
    }

    const media = soma / frequenciaTotal

    return media
}

console.log("Média aritmética: ", media())