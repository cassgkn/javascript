/*
Faça um programa p/ calcular o valor de uma viagem.

Você terá as seguintes variáveis, sendo elas:
1 - Preço do combustível;
2 - Consumo médio de combustível do carro pr KM;
3- Distância em Km da viagem;
4- Valor gasto por viagem;

imprima no console o valor que será gasto para realizar esta viagem.
*/

const Preco_combustivel = 3.79;
let Distância = 13;
let Consumo_medio_litro_carro = 8;

let Consumo_litros_percurso = Distância / Consumo_medio_litro_carro;

let Valor_Gasto = Preco_combustivel * Consumo_litros_percurso;

console.log(`Você irá gastar por dia p/ chegar no curso em R$ ${Valor_Gasto.toFixed(2)}`)




