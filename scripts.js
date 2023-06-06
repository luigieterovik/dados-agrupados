const numeros = [] // INSERIR CADA VALOR INDIVIDUAL

const numerosFrequencia = [3,5,4] // INSERIR OS VALORES RELATIVOS E RESPECTIVOS AOS LIMITES
const quantidadeNumerosFrequencia = numerosFrequencia.length

const limites = [[500,1000],[1000,1500],[1500,2000]]
const quantidadeLimites = limites.length


if (numeros.length === 0 && quantidadeNumerosFrequencia > 0) {

    for (let i = 0; i < quantidadeLimites; i++) {
        for (let j = 0; j < numerosFrequencia[i]; j++) {
            numeros.push(limites[i][0])
        }
    }
}

const quantidadeNumeros = numeros.length

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
        let indiceClasseMediana = 0
        let classeAnterior = frequenciaTotal / 2
        
        for (let i = 1; i < quantidadeLimites; i++) {
        	let j = i - 1
        	
        	if (classeAnterior >= frequenciaAbsolutaAcumulada()[j] && classeAnterior < frequenciaAbsolutaAcumulada()[i]) {
      		indiceClasseMediana = i
        		
        		break
        	}
        }
        
        return indiceClasseMediana
    }
    
    console.log(classeMediana())
    
    const limiteInferior = limites[classeMediana()][0]
    const somaFrequenciaAbsoluta = frequenciaTotal / 2
    let frequenciaAcumuladaClasseAnterior = 0
    if (classeMediana() !== 0) {
    frequenciaAcumuladaClasseAnterior = frequenciaAbsolutaAcumulada()[classeMediana() - 1]
    } 
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