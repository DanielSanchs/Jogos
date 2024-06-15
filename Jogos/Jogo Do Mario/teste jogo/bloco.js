function Bloco(context, teclado){
	this.context = context;
	this.teclado = teclado;
	this.largura = 0;
	this.altura = 0;
	this.velocidade = 0;
	this.cor = "black";
	this.x = 0;
	this.y = 0;
	this.pulando = false;
	this.alturaDoPulo = 0;
	this.abaixado = 0;
}
Bloco.prototype = {
	atualizar: function(){
		//andando para a direita
		if(this.teclado.pressionada(SETA_DIREITA) && this.x < this.context.canvas.width - this.largura){
			this.x += this.velocidade;
		}

		//andando para a esquerda
		if(this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0){
			this.x -= this.velocidade;
		}

		//gravidade
		if(this.y < this.context.canvas.height - (this.altura - this.abaixado) && ! this.pulando){
			this.y += this.velocidade;
		}
		if(this.y > this.context.canvas.height - (this.altura - this.abaixado)){
			this.y -= this.velocidade;
		}

		//pulo
		if(this.pulando){
			this.alturaDoPulo--;
			this.y -= this.velocidade;
			if(this.alturaDoPulo < 0){
				this.pulando = false;
			}
		}

		//abaixar
		if(this.teclado.pressionada(SETA_ABAIXO)){
			this.abaixado = this.altura / 2
		}else{
			this.abaixado = 0;
		}
	},
	desenhar: function(){
		this.context.save();
		this.context.fillStyle = this.cor;
		this.context.fillRect(this.x, this.y, this.largura, this.altura - this.abaixado);
		this.context.restore();
	},
	pular: function(){
		//pulando somente quando o objeto estiver no chão
		if(this.y >= this.context.canvas.height - (this.altura - this.abaixado)){
			this.alturaDoPulo = 12;
			this.pulando = true;
		}
	}
}