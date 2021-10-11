function contador(){
    //inicio
    let inumber = document.getElementById("inumber");
    let numberi = Number(inumber.value) 

    //fim
    let ifim = document.getElementById("ifim");
    let fimi = Number(ifim.value)

    //passo
    let ipasso = document.getElementById("ipasso");
    let passoi = Number(ipasso.value)

    //resultado
    var res = document.getElementById("res");

    //condicional
    if (numberi >= fimi){
        res.innerHTML = 'ERROR! Inicio não pode começar antes ou no mesmo local que o fim!'
    }

    else if (numberi == 0 || fimi == 0 || passoi == 0){
        res.innerHTML = 'ERROR! Digite os valores em todas as abas!'
    } //se o valor for 0/nulo, não mostrará resultado


    //resposta
    else{
        res.innerHTML = "Contando... <br> "
        for(let c = numberi; c <= fimi; c += passoi){

        //O contador (c), vai começar no inicio e enquanto for menor ou igual a fim, ele vai receber ele mesmo + o passo!

        res.innerHTML += `${c} \u{1F449}` // += vai fazer manter o valor do primeiro loop e adicionar o do segundo, mantendo assim a sequencia dos numeros com o pulo

       
    }
        res.innerHTML += `\u{1F3C1}`
}}