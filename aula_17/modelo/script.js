let number = parseInt(document.querySelector('#num').value)
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adiciona(){
    
    res.innerHTML = ''

    if(isNumero(num.value) && !inLista(num.value, valores)){
        let item = document.createElement('option') 
        item.text = `Valor ${num.value} adicionado` 
        lista.appendChild(item)
        valores.push(Number(num.value))

    }else {
        alert('Valor inválido ou já encontrado na lista')
    }

}

function somar(valores){
    let i = valores.length
    let output = 0
    for(let cont = 0; cont < i; cont++){
        output = valores[cont] + output
    }
    return output
}

function med(soma){
    let output
    let i = valores.length
    output = soma / i
    return output
}

function analisa (){
    
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar.')
    }else{
        let tamanho = valores.length
        let maximo = Math.max(...valores)
        let soma = somar(valores)
        let media = med(soma)
    }    
    res.innerHTML = `Ao todo, temos ${tamanho} números cadastrados.<br>`
    res.innerHTML += `O maior valor informado foi o ${maximo}.<br>`
    res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
    res.innerHTML += `A média dos valores digitados é ${media}.<br>`
}