//1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//Mensagem que será impressa: false. Pois o operado E (&&) só retornará true se ambos os valores declarados forem true.

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
//Mensagem que será impressa: false. Pois o operado E (&&) só retornará true se todos os valores declarados forem true.

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
/*A variável linha 15 deste código tem como interpretação: 
!resultado = true
(bool1 || bool1) = true
resultado = true && true
Portanto, a mensagem que será impressa: true.*/

console.log("e. ", typeof resultado)
//Mensagem que será impressa: boolean.

//2. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)
////Mensagem que será impressa: undefined. Pois a variável foi declarada porém, nenhum valor foi associado à mesma.

array = null
console.log('b. ', array)
//Mensagem que será impressa: null. Pois a variável declarada possui valor igual a null.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
////Mensagem que será impressa: 11. Pois existem 11 elementos dentro da array.

let i = 0
console.log('d. ', array[i])
//Mensagem que será impressa: 3. Pois o elemento que ocupa a posição 0 dentro da array é 3.

array[i+1] = 19
console.log('e. ', array)
//Mensagem que será impressa: [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
/*Neste caso, foi solicitada a troca do elemento que ocupa a posição i+1=1. 
Ou seja, o elemento que ocupa a posição 1 dentro da array (nº 4) será substituído pelo nº 19.*/

const valor = array[i+6]
console.log('f. ', valor)
//Mensagem que será impressa:  9
//Aqui foi solicitado o valor que ocupa a posição nº 6 (0+6=6).


//Exercícios de escrita de código

//1. Faça um programa que:

//a. Pergunte a idade do usuário
let idadeUsuario = Number(prompt("Qual a sua idade?"))

/*b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga (não se esqueça de converter 
as respostas para o tipo número)*/
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"))

/*c. **Imprima na tela** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido 
pela resposta (`true` ou `false`). Para isso, use a variável criada no item (b) para definir qual será a resposta.*/
let comparar = idadeUsuario > idadeAmigo
console.log("Sua idade é maior que a do seu amigo?" + comparar)

//d. **Imprima na tela** a diferença de idade (não tem problema se sair um número negativo)

let diferenca = idadeUsuario - idadeAmigo
console.log("A diferença de idade entre vocês é de: " + diferenca + " ano(s)")


//2. Faça um programa que:

//a. Peça ao usuário que insira um número par (não se esqueça de converter a resposta para o tipo número).
let numeroPar = Number(prompt("Insira um número par"))

//b. Imprima na tela o resto da divisão desse número por 2.
let divisao = numeroPar%2
console.log("O valor restante da divisão do número por 2 é igual a: " + divisao)

//c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//Sim. Pois qualquer número par dividido por 2 terá resto igual a zero.

//d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
//O resto da divisão terá valor diferente igual a 1, quando dividido por 2.


//3. Faça um programa, seguindo os passos:

//a. Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
let listaDeTarefas = []

//b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
let primeiraTarefa = prompt("Insira a primeira tarefa que você precisa fazer no dia")
listaDeTarefas.push(primeiraTarefa)

let segundaTarefa = prompt("Insira a segunda tarefa que você precisa fazer no dia")
listaDeTarefas.push(segundaTarefa)

let terceiraTarefa = prompt("Insira a terceira tarefa que você precisa fazer no dia")
listaDeTarefas.push(terceiraTarefa)

//c. Imprima o array na tela
console.log(listaDeTarefas)

//d. Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2
let i = prompt("Qual das três atividades você já realizou? Se a primeira tarefa já foi realizada, digite 0. Se a segunda foi realizada, digite 1. Se a terceira é a tarefa que foi realizada, digite 2")

//e. Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(i, 1)

//f. Imprima o array na tela
console.log("As tarefas que ainda serão realizadas são: " + listaDeTarefas)

//4. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
let emailDoUsuario = prompt("Digite seu e-mail")
let nomeDoUsuario = prompt("Digite seu nome")
console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!")