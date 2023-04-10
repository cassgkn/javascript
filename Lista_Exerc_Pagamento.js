/*
Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
1 - À vista Débito, 10% de desconto;
2 - À vista no dinheiro ou pix, 15% de desconto;
3 - Em 2x, preço normal de etiqueta sem juros;
4 - Acima de 2x, preço normal de etiqueta mais o juros de 10%;
*/

const preco_Etiqueta = 1000;
const Forma_Pagamento = 4;




if (Forma_Pagamento === 1) {
    console.log(`Você recebeu 10% Off p/ o pagamento no débito: R$ ${preco_Etiqueta * .9},00`)
} else if (Forma_Pagamento === 2) {
    console.log(`Você recebeu 15% Off p/ o pagamento no dinheiro ou pix: R$$ {preco_Etiqueta * .85},00`)
} else if (Forma_Pagamento === 3) {
    console.log(`Valor p/ pagamento em até 2 vezes s/ juros: R$ ${preco_Etiqueta},00`)
} else {
    console.log(`Valor p/ pagamento acima de 2 vezes c/ juros: R$ ${preco_Etiqueta * 1.1},00`)
}

