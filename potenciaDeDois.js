
/* 1) Calcule a potência de 2 elevado a um número específico. Deve usar um loop (não usar `Math.pow()`). (Exercicio da Semana)
 Exemplo: potenciaDeDois(10) = 1024 */

 function potenciaDeDois(num) {
    let potencia = 1
    for (let i = 0; i < num; i++) {
        potencia = potencia*2
    }
    return potencia
    
}

console.log('O valor da Potência é:', potenciaDeDois(13).toFixed(3))
