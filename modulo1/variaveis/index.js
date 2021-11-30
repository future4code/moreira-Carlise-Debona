//1. executando este o código o primeiro consolo.log irá imprimir 10 e o segundo resultado será 10, 5.

//2. Os valores que vão imprir será 10,10,10.

//3. Trocar o let p por let horaDia e o let t por let valorDia.

//Exercícios de escrita de código.

//let nome = prompt("Qual é o seu nome?");
//let idade = prompt("Qual é o seu idade?");

//console.log("Olá", nome, "você tem", idade, "anos");
//d)As duas variáveis deram indefinida, por não tem um valor atribuido.
//f) As duas variáveis imprimiram String

/*2. Opção 1:
let pergunta1 = prompt("Você gosta de Sprit?");
let pergunta2 = prompt("Você é gremista?");
let pergunta3 = prompt("Você gosta de alho cru?");

console.log("Você gosta de Sprit?", pergunta1);
console.log("Você é gremista?", pergunta2);
console.log("Você gosta de alho cru?", pergunta3); */

//Opção 2:
/*
let pergunta1 = "Você gosta de Sprit?";
let pergunta2 = "Você é gremista?";
let pergunta3 = "Você gosta de alho cru?";

let resposta1 = "Sim";
let resposta2 = "Sim";
let resposta3 = "Não";

console.log(pergunta1, "-", resposta1);
console.log(pergunta2, "-", resposta2);
console.log(pergunta3, "-", resposta3);

//3. */
let a = 10;
let b = 25;
let c;
// Aqui faremos uma lógica para trocar os valores

c = a;
a = b;
b = c;

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a); // O novo valor de a é 25
console.log("O novo valor de b é", b); // O novo valor de b é 10
