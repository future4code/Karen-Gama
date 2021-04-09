//EXERCÍCIO 1
//O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

/*Inicialmente, teremos que a variável "valor" será igual a zero. O loop "for" foi escrito da seguinte maneira:
terá uma variável "i" de valor inicial igual a zero; i será executado até ter um valor menor que 5; haverá incremento em
uma unidade na variável i cada vez que o loop for executado.
Teremos dentro do escopo do "for" o seguinte código:
valor+= i ----> Este cálculo é o mesmo que: valor = valor + i
I) valor = 0 + 1 = 1
II) valor = 1 + 2 = 3
III) valor = 3 + 3 = 6
IV) valor = 6 + 4 = 10
Por fim, todos os loops da variável (até i seja menor que 5) valor serão impressos no console*/


//EXERCÍCIO 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
    console.log(numero)
  }
} 

//a. O que vai ser impresso no console?

/*Será impresso:
19
21
23
25
27
30
*/

/*b. Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? 
Se sim, o que poderia ser usado para fazer isso?*/

/*Sim. Existe um comando chamado array.entries() onde além de imprimir os valores dentro do array, 
imprime seus respectivos índices. Podemos, então, reescrever o loop da seguinte maneira para imprimir o índice de 
cada elemento da lista: */

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
let indice = lista.entries();
for (let impressao of indice) {
    console.log(impressao);
}

/*Existe uma forma alternativa de imprimimr um elemento de um array através da expressão [i, v] (índice e valor, respectivamente).
E para imprimir o índice e os números maiores que 18 do array, teremos: (Observação: para esta resposta, foi consultado o site 
"https://flaviocopes.com/how-to-get-index-in-for-of-loop/)*/

let lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
for (let [i, v] of lista.entries()) {
  if (v > 18) {
    console.log(i, v);
  }
}


//DESAFIO 1

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}

//Qual seria o resultado impresso no console, se o usuário digitasse o número 4?
/* 
0
00
000
0000

Isso acontece pois o bloco será repetido a quantidade total de vezes digitada (neste caso, 4) e, a cada repetição,
teremos a soma linha = linha + "0". Como trata-se de uma string, os zeros ficarão juntos a cada repetição.*/


//EXERCÍCIO 3

/*Nas perguntas abaixo, considere que você tenha acesso a um `array` (chamado de 'array original') que seja composto 
somente de números.*/

//a. Escreva um programa que: Imprima cada um dos valores do array original.

let arrayOriginal = [10, 20, 25, 30, 40, 50]
for (let impressao1 of arrayOriginal)
console.log(impressao1)

//b. Escreva um programa que: Imprima cada um dos valores do array original divididos por 10

const arrayOriginal = [10, 20, 25, 30, 40, 50]
for (let i = 0; i < arrayOriginal.length; i++) {
  arrayOriginal[i] /= 10;
}
console.log(arrayOriginal)

//c. Escreva um programa que:
//c.1 **Crie** um novo array contendo, somente, os números pares do array original.
const arrayOriginal = [10, 20, 25, 30, 40, 50]
let novoArray = []
for (let i = 0; i < arrayOriginal.length; i++) {
  if (arrayOriginal[i]%2 == 0) {
    novoArray.push(arrayOriginal[i]);
  }
}

//c.2 **Imprima** esse novo array
console.log(novoArray);

//d. Escreva um programa que:
//Crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"
//Imprima este novo array
const arrayOriginal = [10, 20, 25, 30, 40, 50]
for (let [i, v] of arrayOriginal.entries()) {
  console.log("O elemento do índex " + i + " é: " + arrayOriginal[i])
}

//e. Escreva um programa que imprima no console o maior e o menor números contidos no array original
const arrayOriginal = [10, 20, 25, 30, 40, 50]
let valorMaximo = arrayOriginal[0]
let valorMinimo = arrayOriginal[0]
for (let i = 0; i < arrayOriginal.length; i++) {
  if (arrayOriginal[i] > valorMaximo) {
    valorMaximo = arrayOriginal[i];
  } else if (arrayOriginal[i] < valorMinimo) {
    valorMinimo = arrayOriginal[i];
  }
}

console.log("O maior número do array é: " + valorMaximo + ". O menor número é: " + valorMinimo)

/*Observação: para realizar esta última questão, o site https://stackoverflow.com/questions/38256170/find-the-smallest-and-largest-value-in-an-array-with-javascript
foi consultado*/

