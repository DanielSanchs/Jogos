programa
{
	inclua biblioteca Graficos --> g
	inclua biblioteca Util --> u

	///variaveis globais
	inteiro yanka = g.carregar_imagem("yanka.jpg")
	inteiro franz = g.carregar_imagem("franz.jpg")
	inteiro marlon = g.carregar_imagem("marlon.jpg")
	inteiro eduarda = g.carregar_imagem("eduarda.jpg")
	inteiro jimin = g.carregar_imagem("jimin.jpg")
	inteiro evelyn = g.carregar_imagem("evelyn.jpg")
	inteiro lyv = g.carregar_imagem("lyv.jpg")
	inteiro anita = g.carregar_imagem("anita.jpg")
	inteiro fundo = g.carregar_imagem("fundo.jpg")

	funcao inicio()
	{	
		logico ligado = verdadeiro 
		g.iniciar_modo_grafico(ligado)
		faca
		{
			g.limpar()
			g.renderizar()	
		}enquanto(ligado)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 643; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */