//EXERCÍCIO 1. Leia o código abaixo:

function minhaFuncao(variavel) {
  return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a. O que vai ser impresso no console? 
//10
//50

/*b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? 
O que apareceria no console?*/
/*Apareceria um erro pois a função sozinha fora de seu bloco sem um comando não executará nada.*/


//EXERCÍCIO 2. Leia o código abaixo:

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

const outraFuncao = function (array) {
  for (let i = 0; i < 2; i++) {
    console.log(array[i])
  }
}

outraFuncao(arrayDeNomes)

//a. Explicite quais são as saídas impressas no console
//Darvas
//Caio

//b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?
//Amanda
//Caio


//EXERCÍCIO 3. O código abaixo mostra uma função que recebe um array e devolve outro array. 

const metodo = (array) => {
  let arrayFinal = [];

  for (let x of array) {
    if (x % 2 === 0) {
      arrayFinal.push(x * x)
    }
  }

  return arrayFinal;
}

//Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!
/*A arrow function acima insere números pares multiplicados por eles mesmos dentro de uma array final.
Sugeriria como nome mais explicativo para função acima: evenNumbers ou numerosPares.*/


//EXERCÍCIO 4. Escreva as funções explicadas abaixo:

//a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprimir essa mensagem.

function infoKaren() {
  console.log("Eu sou Karen, tenho 25 anos, moro no Cabo de Santo Agostinho e sou estudante.")
}
infoKaren()

//b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
//o nome (`string`), a idade (`number`), a cidade (`string`) e um `boolean` que representa se é estudante ou não. 
//Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.

function infoPessoal() {
  const nome = prompt("Digite seu nome")
  const idade = Number(prompt("Qual a sua idade?"))
  const cidade = prompt("Qual cidade você mora?")
  let estudante = ""
  if (confirm("Você é estudante? Clique em Ok para confirmar ou clique em Cancelar para negar")) {
    estudante = "sou";
  } else {
    estudante = "não sou";
  }
  console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro no(a)/em " + cidade + " e " + estudante + " estudante")
}

infoPessoal()


//EXERCÍCIO 5

//Escreva as funções explicadas abaixo:

//a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. 
//Invoque a função e imprima no console o resultado.

function numeros(numero1, numero2) {
  numero1 = Number(prompt("Digite o primeiro número"))
  numero2 = Number(prompt("Digite o segundo número"))
  let soma = numero1 + numero2
  console.log("O valor da soma é: " + soma)
  return soma
}

numeros()

//b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function numeros(numero1, numero2) {
  numero1 = Number(prompt("Digite o primeiro número"))
  numero2 = Number(prompt("Digite o segundo número"))
  if (numero1 >= numero2) {
    console.log("O primeiro número digitado é maior ou igual ao segundo número")
    return true
  } else {
    console.log("O primeiro número digitado é menor que o segundo número")
    return false
  }
}

numeros()

//c. Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima essa mensagem 10 vezes. 
//(não é permitido escrever 10 `console.log` dentro da função. Use outra estrutura de código para isso)

function mensagem(frase) {
  frase = prompt("Digite uma mensagem")
  for (let i = 0; i < 10; i++) {
    console.log(frase)
  }
}

mensagem()


//EXERCÍCIO 6

//Para os itens a seguir, considere o seguinte array para os seus testes:

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele
function qntd() {
  if (confirm("Deseja inserir algum número na array?")) {
    elemento = Number(prompt("Digite um número para inserir no array"))
    array.push(elemento)
  } else {
    console.log("Você desejou não inserir mais números")
  }
  console.log(array.length)
}

qntd()

//b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
function oddOrEven() {
  numero = Number(prompt("Digite um número"))
  if (numero % 2 === 0) {
    console.log("Este número é par")
    return true
  } else if (numero % 2 === 1) {
    console.log("Este número é ímpar")
    return false
  }
}

oddOrEven()

//c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let evenArray = []
function evenOfArray() {
  for (let i of array) {
    if (i % 2 === 0) {
      evenArray.push(i)
    }
  }
  console.log("Temos " + evenArray.length + " números pares dentro da array. Os números pares são: " + evenArray)
}
evenOfArray()

//d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let evenArray = []
let oddArray = []
function evenOfArray() {
  for (let i of array) {
    if (i % 2 === 0) {
      evenArray.push(i)
      return true
    } else if (i % 2 === 1) {
      oddArray.push(i)
      return false
    }
  }
  console.log("Temos " + evenArray.length + " números pares dentro da array. Os números pares são: " + evenArray)
  console.log("Temos " + oddArray.length + " números ímpares dentro da array. Os números ímpares são: " + oddArray)
}
evenOfArray()