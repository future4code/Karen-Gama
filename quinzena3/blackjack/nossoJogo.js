/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo(a) ao jogo de Blackjack!")
if (confirm("Quer iniciar uma nova rodada?")) {
   console.log("Vamos iniciar uma nova partida!")
   const carta1Jogador = comprarCarta();
   const carta2Jogador = comprarCarta();
   const cartasJogador = carta1Jogador.valor + carta2Jogador.valor
   console.log("Você recebeu as cartas: " + carta1Jogador.texto, carta2Jogador.texto + ". Sua pontuação total é de: " + cartasJogador)

   const carta1Comput = comprarCarta();
   const carta2Comput = comprarCarta();
   const cartasComput = carta1Comput.valor + carta2Comput.valor
   console.log("O computador recebeu as cartas: " + carta1Comput.texto, carta2Comput.texto + ". A pontuação total de seu adversário é: " + cartasComput)

   if (cartasComput == cartasJogador) {
      console.log("Esta rodada está empatada")
   } else if (cartasComput < cartasJogador) {
      console.log("Você ganhou esta rodada!!!")
   } else if (cartasComput > cartasJogador) {
      console.log("Você perdeu esta rodada. Tente novamente!")
   }
} else {
   console.log("O jogo acabou!")
}

