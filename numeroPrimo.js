/*Crie uma função que determina se um número é primo e retorne true ou false conforme o caso. 
Em matemática, um número primo é um número natural maior que 1 que é divisível somente por ele mesmo e 1. 
Utilize o operador módulo (`%`) para determinar se um número é divisível por outro. */

function numeroPrimo(num){
    for (let i = 2; i < num;){
        if (num % i === 0) {
            return false
        } else{
            return true
        }
    }
}

console.log(numeroPrimo(19))