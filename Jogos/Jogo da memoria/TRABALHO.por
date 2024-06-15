programa
{
	inclua biblioteca Teclado --> t
	inclua biblioteca Graficos --> g
	inclua biblioteca Texto --> tx
	
	funcao inicio()
	{
		inteiro x=0, y=0, aum=0, teclado
		
		g.iniciar_modo_grafico(verdadeiro)
		g.definir_cor(g.COR_PRETO)
		g.definir_dimensoes_janela(600, 600)
		g.definir_titulo_janela("BIBLIOTECA TECLADO")
		g.limpar()
		g.renderizar()
		faca{  
			g.definir_cor(g.COR_PRETO)
			g.limpar()
			g.definir_cor(g.COR_AMARELO)
			g.desenhar_elipse(275+x-(aum/2), 275+y-(aum/2), 50+aum, 50+aum, verdadeiro)
			g.definir_cor(g.COR_PRETO)
			g.desenhar_elipse( 283+x-(aum/4), 285+y-(aum/4), 10+aum-(aum/10*8), 10+aum-(aum/10*8), verdadeiro)
			g.desenhar_elipse( 303+x+(aum/64), 285+y-(aum/4), 10+aum-(aum/10*8), 10+aum-(aum/10*8), verdadeiro)
			g.desenhar_elipse( 295+x-(aum/10), 305+y+(aum/34), 10+aum-(aum/10*8), 10+aum-(aum/10*8), verdadeiro)
			g.definir_cor(g.COR_BRANCO)
			g.desenhar_elipse(285+x-(aum/4), 286+y-(aum/4), 3+aum-(aum/10*9), 3+aum-(aum/10*9), verdadeiro)
			g.desenhar_elipse(305+x+(aum/64), 286+y-(aum/4), 3+aum-(aum/10*9), 3+aum-(aum/10*9), verdadeiro)
			g.definir_tamanho_texto(20.0)
			teclado=t.ler_tecla()
			se(teclado==t.TECLA_SETA_ACIMA){
				y-=30
			}senao se(teclado==t.TECLA_SETA_ABAIXO){
				y+=30
			}senao se(teclado==t.TECLA_SETA_ESQUERDA){
				x-=30
			}senao se(teclado==t.TECLA_SETA_DIREITA){
				x+=30
			}senao se(teclado==t.TECLA_ADICAO){
				aum+=10
			}senao se(teclado==t.TECLA_SUBTRACAO){
				aum-=10
			}senao se(teclado==t.TECLA_A){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA A")
			}senao se(teclado==t.TECLA_B){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA B")
			}senao se(teclado==t.TECLA_C){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA C")
			}senao se(teclado==t.TECLA_D){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA D")
			}senao se(teclado==t.TECLA_E){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA E")
			}senao se(teclado==t.TECLA_F){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA F")
			}senao se(teclado==t.TECLA_G){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA G")
			}senao se(teclado==t.TECLA_H){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA H")
			}senao se(teclado==t.TECLA_I){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA I")
			}senao se(teclado==t.TECLA_J){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA J")
			}senao se(teclado==t.TECLA_K){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA K")
			}senao se(teclado==t.TECLA_L){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA L")
			}senao se(teclado==t.TECLA_M){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA M")
			}senao se(teclado==t.TECLA_N){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA N")
			}senao se(teclado==t.TECLA_O){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA O")
			}senao se(teclado==t.TECLA_P){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA P")
			}senao se(teclado==t.TECLA_Q){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA Q")
			}senao se(teclado==t.TECLA_R){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA R")
			}senao se(teclado==t.TECLA_S){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA S")
			}senao se(teclado==t.TECLA_T){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA T")
			}senao se(teclado==t.TECLA_U){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA U")
			}senao se(teclado==t.TECLA_V){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA V")
			}senao se(teclado==t.TECLA_W){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA W")
			}senao se(teclado==t.TECLA_X){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA X")
			}senao se(teclado==t.TECLA_Y){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA Y")
			}senao se(teclado==t.TECLA_Z){
				g.definir_cor(g.COR_BRANCO)
				g.desenhar_texto(200, 200, "VOCÊ CLICOU NA TECLA Z")
			}
			g.renderizar()
		}enquanto(verdadeiro)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 362; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */