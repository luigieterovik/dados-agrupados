const numeros = [1,2,3,4,4,5,6,7,8,9,10]
const quantidadeNumeros = numeros.length

const numerosFrequencia = []
const quantidadeNumerosFrequencia = numerosFrequencia.length

const limites = [[1,2],[2,4],[4,5],[5,6],[6,8],[8,10]]
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


const mediana = () => {
    const classeMediana = () => {
        const valorCentralClasseMediana = frequenciaTotal / 2

        let valorAnterior = 0

        for (let i = 0; i <= quantidadeLimites; i++) {
            if (frequenciaAbsolutaAcumulada()[i] <= valorCentralClasseMediana) {
                valorAnterior = frequenciaAbsolutaAcumulada()[i]
            } else break
        }

        const indexClasseMediana = frequenciaAbsolutaAcumulada().indexOf(valorAnterior)

        return indexClasseMediana
    }

    const limiteInferior = limites[classeMediana()][0]
    const somaFrequenciaAbsoluta = frequenciaTotal / 2
    const frequenciaAcumuladaClasseAnterior = frequenciaAbsolutaAcumulada()[classeMediana() - 1]
    const frequenciaIntervalo = frequenciaAbsoluta()[classeMediana()]
    const amplitude = (Math.max.apply(Math, limites[classeMediana()])) - (Math.min.apply(Math, limites[classeMediana()]))

    const mediana = (((somaFrequenciaAbsoluta - frequenciaAcumuladaClasseAnterior) * amplitude) / frequenciaIntervalo) + limiteInferior

    return mediana
}

console.log("Mediana: ", mediana())


const variancia = () => {
    let soma = 0

    for (let i = 0; i < quantidadeLimites; i++) {
        soma += Math.pow((pontoMedio()[i] - media()), 2) * frequenciaAbsoluta()[i]
    }

    const variancia = soma / frequenciaTotal

    return variancia
}

console.log("Variância: ", variancia())


const desvioPadrao = Math.sqrt(variancia())

console.log("Desvio-padrão: ", desvioPadrao)


// INCREMENTAR O MÉTODO POR NÚMEROS FREQUENCIA

