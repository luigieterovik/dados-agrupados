const button = document.getElementsByClassName('buttonCalcular')[0]
const inputFrequenciaAbsolutaAcumulada = document.getElementById('inputResultadosAbsolutaAcumulada')
const inputFrequenciaRelativa = document.getElementById('inputResultadosRelativa')
const inputFrequenciaRelativaAcumulada = document.getElementById('inputResultadosRelativaAcumulada')
const inputPontoMedio = document.getElementById('inputResultadosPontoMedio')
const inputMedia = document.getElementById('inputResultadosMedia')
const inputMediana = document.getElementById('inputResultadosMediana')
const inputVariancia = document.getElementById('inputResultadosVariancia')
const inputDesvioPadrao = document.getElementById('inputResultadosDesvioPadrao')
const inputModa = document.getElementById('inputResultadosModa')
const textareaNumeros = document.getElementById('textareaNumeros')
const textareaQuantidade = document.getElementById('textareaQuantidade')


const calcular = () => {

    const limites = []
    const numeros = []

    let splitedLimites = textareaNumeros.value.split(",")
    for (let i = 0; i < splitedLimites.length; i++) {
        let splitedNumbers = []
        splitedLimites[i].split("-").forEach(number => {
            splitedNumbers.push(+number)
        })
        limites.push(splitedNumbers)
    }

    textareaQuantidade.value.split(",").forEach(number => {
        numeros.push(parseFloat(number))
    })

    const quantidadeLimites = limites.length

    const frequenciaAbsolutaAcumulada = () => {
        let frequenciaAbsolutaAcumulada = []

        frequenciaAbsolutaAcumulada[0] = numeros[0]

        for (let i = 1; i < quantidadeLimites; i++) {
            let j = i - 1

            frequenciaAbsolutaAcumulada[i] = frequenciaAbsolutaAcumulada[j] + numeros[i]
        }

        return frequenciaAbsolutaAcumulada
    }
    console.log("Frequência absoluta acumulada: ", frequenciaAbsolutaAcumulada())
    inputFrequenciaAbsolutaAcumulada.value = frequenciaAbsolutaAcumulada()

    const frequenciaTotal = frequenciaAbsolutaAcumulada().pop()

    const frequenciaRelativa = () => {
        let frequenciaRelativa = []

        for (let i = 0; i < quantidadeLimites; i++) {
            frequenciaRelativa.push(+((numeros[i] * 100) / frequenciaTotal).toFixed(2))
        }

        return frequenciaRelativa
    }
    console.log("Frequência relativa: ", frequenciaRelativa())
    inputFrequenciaRelativa.value = frequenciaRelativa()

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
    inputFrequenciaRelativaAcumulada.value = frequenciaRelativaAcumulada()

    const pontoMedio = () => {
        let pontoMedio = []

        for (let i = 0; i < quantidadeLimites; i++) {
            pontoMedio.push((limites[i][0] + limites[i][1]) / 2)
        }

        return pontoMedio
    }
    console.log("Ponto médio: ", pontoMedio())
    inputPontoMedio.value = pontoMedio()

    const media = () => {
        let soma = 0

        for (let i = 0; i < quantidadeLimites; i++) {
            soma += numeros[i] * pontoMedio()[i]
        }

        const media = soma / frequenciaTotal

        return media
    }
    console.log("Média aritmética: ", media())
    inputMedia.value = media()

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

        const limiteInferior = limites[classeMediana()][0]
        const somaFrequenciaAbsoluta = frequenciaTotal / 2
        let frequenciaAcumuladaClasseAnterior = 0
        if (classeMediana() !== 0) {
            frequenciaAcumuladaClasseAnterior = frequenciaAbsolutaAcumulada()[classeMediana() - 1]
        }
        const frequenciaIntervalo = numeros[classeMediana()]
        const amplitude = (Math.max.apply(Math, limites[classeMediana()])) - (Math.min.apply(Math, limites[classeMediana()]))

        const mediana = (((somaFrequenciaAbsoluta - frequenciaAcumuladaClasseAnterior) * amplitude) / frequenciaIntervalo) + limiteInferior

        return mediana
    }
    console.log("Mediana: ", mediana())
    inputMediana.value = mediana()

    const variancia = () => {
        let soma = 0

        for (let i = 0; i < quantidadeLimites; i++) {
            soma += Math.pow((pontoMedio()[i] - media()), 2) * numeros[i]
        }

        const variancia = soma / frequenciaTotal

        return variancia
    }
    console.log("Variância: ", variancia())
    inputVariancia.value = variancia()

    const desvioPadrao = Math.sqrt(variancia())
    console.log("Desvio-padrão: ", desvioPadrao)
    inputDesvioPadrao.value = desvioPadrao

    const moda = () => {
        const moda = Math.max(...numeros)

        function getAllIndexes(arr, val) {
            var indexes = [], i = -1;
            while ((i = arr.indexOf(val, i + 1)) != -1) {
                indexes.push(i);
            }
            return indexes;
        }

        let indexes = getAllIndexes(numeros, moda)

        if (indexes.length === 1) {
            return pontoMedio()[indexes]
        }
        if (indexes.length > 1) {
            const allEqual = arr => arr.every(val => val === arr[0])
            if (allEqual(numeros)) return "Amodal"
            
            let modas = []
            for (let i = 0; i < indexes.length; i++) {
                modas.push(pontoMedio()[indexes[i]])
            }
            return modas
        }
    }
    console.log("Moda: ", moda())
    inputModa.value = moda()
}


button.addEventListener('click', calcular)

document.addEventListener('keypress', function (k) {
    if (k.key === "Enter") {
        calcular()
    }
})