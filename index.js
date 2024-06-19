let nome = "adriano"
let win = 110000
let loose = 5

function calculaRank(){
    let calculo = win - loose
    if(calculo < 10){
        console.log("O Herói " + nome + " tem o saldo de " + win + " e está no rank de nível Ferro")
  
    }else if(calculo > 11 && calculo < 20){
        console.log("O Herói " + nome + " tem o saldo de " + win + " e está no rank de nível Bronze")

    }else if(calculo > 21 && calculo < 50){
        console.log("O Herói " + nome + " tem o saldo de " + win + " e está no rank de nível Prata")
    }else if(calculo > 51 && calculo < 80){
        console.log("O Herói " + nome + " tem o saldo de " + win + " e está no rank de nível Ouro")
    }else if(calculo > 81 && calculo < 90){
        console.log("O Herói " + nome + " tem o saldo de " + win + " e está no rank de nível Diamante")
    }else if(calculo > 91 && calculo < 100){
        console.log("O Herói " + nome + " tem o saldo de " + win + " e está no rank de nível Lendário")
    }else{
        console.log("O Herói " + nome + " tem o saldo de " + win + " e está no rank de nível Imortal")
    }
}

calculaRank()