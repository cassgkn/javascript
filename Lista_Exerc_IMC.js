/*
2) O IMC - Indice de Massa Corporal é um criterio da Organização Mudial de Saude para dar uma indicação sobre o estado de peso de um individuo adulto.

Formula IMC:
IMC = peso / (atura * altura);

Elabore um algoritimo que dado o peso e altura, mostre a sua condição de acordo com a tabela abaixo:

IMC em adulto, condição:
- Abaixo de 18,5 = abaixo do peso;
- Entre 18,5 e 25 = peso normal;
- Entre 25 e 30 = acima do peso;
- Entre 30 e 40 = obeso;
- Acima de 40 = obsidade grave

*/

const peso = 59;
const altura = 1.54;

const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log(`O seu IMC é: ${imc.toFixed(2)}, portanto está abaixo do peso!`);
} else if (imc >= 18.5 && imc < 25) {
    console.log(`O seu IMC é: ${imc.toFixed(2)}, portanto seu peso está normal!`);
} else if (imc >= 25 && imc < 30) {
    console.log(`O seu IMC é: ${imc.toFixed(2)}, portanto está acima do peso!`);
} else if (imc >= 30 && imc < 40) {
    console.log(`O seu IMC é: ${imc.toFixed(2)}, portanto está obeso!`);
} else  {
    console.log(`O seu IMC é: ${imc.toFixed(2)}, portanto está com OBESIDADE GRAVE!`);
}