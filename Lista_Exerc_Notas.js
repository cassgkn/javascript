/*
1) Faça um algoritmo que dado 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme tabela abaixo:

Media = (nota1 + nota2 + nota3) / 3;

Classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre; */

let nota1 = 5;
let nota2 = 5;
let nota3 = 0;

const Media_final = (nota1 + nota2 + nota3) /3;

if (Media_final < 5) {
    console.log(`Você está REPROVADO. Sua performance nas provas foram abaixo do esperado.`);
} else if (Media_final >= 5 && Media_final <= 7) {
    console.log(`Você está de RECUPERAÇÃO. Sua performance nas provas foram abaixo do esperado.`);
} else  {
    console.log(`PARABÊNS, Você está APROVADO!`);
}