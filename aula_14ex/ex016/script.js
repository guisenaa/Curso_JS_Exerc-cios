function contar(){
    let start = parseInt(document.getElementById('inicio').value)
    let stop = parseInt(document.getElementById('fim').value )
    let step = parseInt(document.getElementById('passo').value )
    let res = document.querySelector('div#res')
    let startOriginal = start

    if(step <= 0 || isNaN(step)){
        window.alert('[ERRO] Passo inválido, considerando passo igual a 1!')
        step = 1
    }

    res.innerHTML = 'Contando: <br>'
    if(start < stop){
    //Contagem crescente
    while(start <= stop){
        res.innerHTML += `${start} 👉`
        start = start + step
    }
    }else if(start > stop){
    //contagem decrescente
    while(stop <= start){
        res.innerHTML += `${start} 👉`
        start = start - step
        }   
    }
    res.innerHTML += `🏁`

    if(isNaN(startOriginal) || isNaN(stop)){
        res.innerHTML = 'Impossível contar!'
    }
}