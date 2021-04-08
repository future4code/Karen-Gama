//EXERCÍCIO 1

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
    console.log("Passou no teste.")
} else {
    console.log("Não passou no teste.")
}

//Explique o que o código faz. Qual o teste que ele realiza? 
/*Inicialmente, é aberta uma caixa para que o usuário digite um número qualquer. 
Como o número foi digitado dentro do comando prompt, ele será uma string. 
Em seguinda, o valor digitado pelo usuário será transformado em uma variávlel do tipo número.
Se o resto da divisão por 2 do número digitado pelo usuário for igual a zero, o console imprimirá a mensagem "Passou no teste.".
Caso o resto da divisão do número inserido por 2 não for igual a zero, o console imprimirá a mensagem "Não passou no teste."*/

//Para que tipos de números ele imprime no console "Passou no teste"? 
//O console imprimirá esta mensagem para números pares.

//Para que tipos de números a mensagem é "Não passou no teste"?
//O console imprimirá esta mensagem para números ímpares.


//EXERCÍCIO 2
//O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. Veja abaixo:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
    case "Maçã":
        preco = 2.25
        break;
    case "Uva":
        preco = 0.30
        break;
    case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
    default:
        preco = 5
        break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a. Para que serve o código acima?
/*O código acima demonstrará valores de diferentes frutas através do comando switch case.
Inicialmente abrirá uma janela para que o usuário escolha uma fruta para que seja impresso no console o valor dela.
Caso a fruta não esteja configurada no código, ela terá valor igual a R$5.*/

//b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//O preço da fruta  Maçã  é  R$  2.25

/*c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o 
`break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?*/
/*A mensagem impressa no console seria "O preço da fruta  Pêra  é  R$  5". Isso acontece pois retiramos a palavra 
que faz com que a execução do código saia do bloco em questão. Por este motivo, ele reconhecerá apenas o valor da 
pêra como último valor declarado, ou seja, o valor declaro no bloco default (assim como qualquer outra fruta não configurada no código): R$5*/


//EXERCÍCIO 3

const numero = Number(prompt("Digite o primeiro número."))
if (numero > 0) {
    console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}
console.log(mensagem)

//a. O que a primeira linha está fazendo?
/*Ao abrir a página, aparecerá uma caixa solicitando digitar um número. Devido tratar-se de um prompt,
qualquer valor declarado será lido como string.
Na primeira linha de código ocorrerá a transformação do valor digitado na caixa de comando (prompt)
numa variável do tipo número.*/

//b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
/*Na primeira condição em que o valor 10 é inserido, será impresso no console "Esse número passou no teste",
pois o número é maior que zero.
Na segunda condição em que o número -10 é digitado, nada aparecerá visto que o número é menor que zero.*/

//c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
/*Sim. Pois a mensagem que era para ser impressa no console associada à variável "mensagem" está declarada fora do escopo 
do if. Por esta razão, o terminal imprimirá um erro pois a mensagem a ser impressa não está
associada à variável declarada dentro do escopo quando a condição for verdadeira. 
Caso o comando "console.log(mensagem)" estivesse declarado dentro do escopo if, o usuário além de receber a mensagem 
"Esse número passou no teste" quando digitasse qualquer número maior que zero, também receberia a mensagem no console: "Essa mensagem é secreta!!!"*/


//EXERCÍCIO 4

//Vamos criar programas que lidem com entradas do usuário! 
//Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
let idade = Number(prompt("Qual a sua idade?"))

//3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
//Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
if (idade >= 18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir.")
}


//EXERCÍCIO 5

//Agora faça um programa que verifica que turno do dia um aluno estuda. 
//Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
//Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
let turno = prompt("Qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
if (turno == "M") {
    console.log("Bom Dia!")
} else if (turno == "V") {
    console.log("Boa Tarde!")
} else if (turno == "N") {
    console.log("Boa Noite!")
} else {
    console.log("Turno não encontrado")
}


//EXERCÍCIO 6

//Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

let turno = prompt("Qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
switch (turno){
    case 'M':
        console.log("Bom Dia!")
        break
    case 'V':
        console.log("Boa Tarde!")
        break
    case 'N':
        console.log("Boa Noite!")
        break
    default:
        console.log("Turno não encontrado")
        break
}


//EXERCÍCIO 7

//Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero fantasia e se o ingresso está abaixo de 15 reais. 
//Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
//Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
let tipoFilme = prompt("Qual gênero do filme que você quer assistir?")
let precoIngresso = Number(prompt("Qual o valor do filme em reais (R$)?"))
if (tipoFilme == "fantasia" && precoIngresso < 15) {
    console.log ("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}