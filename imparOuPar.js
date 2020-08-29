/* 5) crie uma função que receba um número e imprima no console de 0 até o número informado.
 Além disso, cada vez que imprimir o número, informe se é par ou ímpar. Exemplo: recebendo 5,
 deve imprimir: "0 é par", "1 é ímpar", "2 é par", "3 é ímpar", "4 é par", "5 é ímpar". */

function imparOuPar(numero) {
    let i = 0
    while (i <= numero) {
        if (i % 2 == 0){    
           console.log(`${i} é par`)
        } else {
           console.log(`${i} é ímpar`)
        }
    i++
   }
}

imparOuPar(25)
