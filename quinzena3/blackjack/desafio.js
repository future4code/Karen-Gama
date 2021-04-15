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
   let carta1Jogador = comprarCarta();
   let carta2Jogador = comprarCarta();
   let carta1Comput = comprarCarta();
   let carta2Comput = comprarCarta();

   if (carta1Jogador.valor + carta2Jogador.valor == 22) {
      carta1Jogador = comprarCarta();
      carta2Jogador = comprarCarta();
      console.log("Você recebeu dois ases. Por este motivo, sortearemos novamente as cartas")
   } else if (carta1Comput.valor + carta2Comput == 22) {
      carta1Comput = comprarCarta();
      carta2Comput = comprarCarta();
      console.log("O adversário recebeu dois ases. Por este motivo, sortearemos novamente as cartas")
   }

   let cartasJogador = [carta1Jogador.texto, carta2Jogador.texto]
   let cartasComput = [carta1Comput.texto, carta2Comput.texto]

   if (confirm("Você recebeu as cartas: " + carta1Jogador.texto + carta2Jogador.texto + ". A carta revelada do computador é a: " + carta1Comput.texto + ". Deseja comprar mais uma carta?")) {
      let carta3Jogador = comprarCarta()
      cartasJogador.push(carta3Jogador.texto)
      totalCartasJogador = carta1Jogador.valor + carta2Jogador.valor + carta3Jogador.valor
      totalCartasComput = carta1Comput.valor + carta2Comput.valor
   } else {
      console.log("Você decidiu não comprar mais uma carta")
      totalCartasComput = carta1Comput.valor + carta2Comput.valor
      totalCartasJogador = carta1Jogador.valor + carta2Jogador.valor
   }

   console.log("Suas cartas são: " + cartasJogador + ". Você tem um total de: " + totalCartasJogador + " pontos. As cartas do seu adversário são:" + carta1Comput.texto + carta2Comput.texto + ". O total de pontos do seu adversário é: " + totalCartasComput)

   if (totalCartasComput == totalCartasJogador) {
      console.log("Esta rodada está empatada")
   } else if (totalCartasComput < totalCartasJogador) {
      console.log("Você ganhou esta rodada!!!")
   } else if (totalCartasComput > totalCartasJogador) {
      console.log("Você perdeu esta rodada. Tente novamente!")
   }
} else {
   console.log("O jogo acabou!")
}


