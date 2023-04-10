/*
Faça um programa p/ calcular o valor de uma viagem.

Você terá as seguintes variáveis, sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que está no seu carro;
4 - Consumo médio de combustível do carro pr KM;
5- Distância em Km da viagem;
6 - Valor gasto por viagem;

imprima no console o valor que será gasto para realizar esta viagem.
*/

const Preco_Etanol = 3.79;
const Preco_Gasolina = 5.29;
const Distância = 13;
const Consumo_medio_litro_carro = 8;
const Tipo_Combustivel = 'Gasolina';
const Consumo_litros_percurso = Distância / Consumo_medio_litro_carro;

if(Tipo_Combustivel === 'Etanol') {
    const Valor_Gasto = Preco_Etanol * Consumo_litros_percurso;
    
    console.log(`Você irá gastar de ${Tipo_Combustivel} por dia p/ chegar no curso em R$ ${Valor_Gasto.toFixed(2)}`);

} else {
    const Valor_Gasto = Preco_Gasolina * Consumo_litros_percurso;
    
    console.log(`Você irá gastar de ${Tipo_Combustivel} por dia p/ chegar no curso em R$ ${Valor_Gasto.toFixed(2)}`);
}

