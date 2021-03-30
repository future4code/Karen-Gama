a = 10
b = 10
console.log(b) //Aqui, será impresso 10 visto que a variável b possui valor igual a 10

b = 5
console.log(a, b) //Aqui, será impresso 10 5. A variável a possui valor igual a 10 e a variável b possui novo valor igual a 5

a = 10
b = 20
c = a
b = c
a = b
console.log(a, b, c) //Aqui, será impresso 10 10 10. No final foi declarado que a é igual a b que, por sua vez, é igual à c.

//1. Exercício sobre escrita de código

//a) Declare uma variável para armazenar um nome, sem atribuir um valor.
let nome;

//b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
let idade;

//c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
console.log(typeof nome);
console.log(typeof idade);

//d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

/*Para ambas as variáveis foi impresso que são variáveis do tipo "undefined". isso acontece 
pois não foi atribuído nenhum valor para as variáveis*/

//d) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
let nome = prompt ("Qual o seu nome?");
let idade = prompt ("Qual a sua idade?");

console.log(typeof nome);
console.log(typeof idade);

//e) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

/*Para ambas as variáveis seus tipos foram classificados como "string". Isto acontece porque as variáveis foram 
declaradas por meio do prompt. Esta ferramenta "traduz" qualquer tipo de variável em string.*/

//f) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu
console.log("Olá,", nome, "! Você tem", idade, "anos.");


//2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo aqui). Imprima-as com as respostas no console:
let resp1 = prompt ("Qual o seu CEP?");
let resp2 = prompt ("Qual bairro você mora?");
let resp3 = prompt ("Qual cidade você mora?");
let resp4 = prompt ("Qual estado você mora?");
let resp5 = prompt ("Qual sua instituição de ensino?");

console.log("O seu CEP é", resp1);
console.log("O nome do bairro onde você mora é", resp2);
console.log("A cidade que você mora é", resp3);
console.log("O estado onde você mora é", resp4);
console.log("Sua instituição de ensino é", resp5);

//3. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

let comidasPreferidas = ["pudim", "pizza portuguesa", "batata frita", "lasanha", "bolo prestígio"]

//a) Imprima na tela o array completo

console.log(comidasPreferidas)

//b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.

console.log("Essas são minhas comidas preferidas:", comidasPreferidas[0],"\n", comidasPreferidas[1],"\n", comidasPreferidas[2],"\n", comidasPreferidas[3],"\n", comidasPreferidas[4]);

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

let comidaPreferidaUsuario = prompt("Qual a suas comida preferida?");

console.log("Essas são minhas comidas preferidas:", comidasPreferidas[0],"\n", comidaPreferidaUsuario,"\n", comidasPreferidas[2],"\n", comidasPreferidas[3],"\n", comidasPreferidas[4]);

//4. Faça um programa que contenha um array com 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

let yesOrNo = ["Sua cor preferida é azul?", "Você gosta de pintar?", "Você gosta de chuva?"];

//a) Crie uma nova variável, contendo um array com as respostas. Utilize o tipo booleano para cada resposta.

let resp = [true, true, false];

//b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

console.log(yesOrNo[0], resp[0],"\n", yesOrNo[1], resp[1],"\n", yesOrNo[2], resp[2])
