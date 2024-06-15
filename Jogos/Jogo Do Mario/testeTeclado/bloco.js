function Bloco(context, tecado){
	this.context = context;
	this.teclado = teclado;
	this.largura = 0;
	this.altura = 0;
	this.velocidade = 0;
	this.cor = "black";
	this.x = 0;
	this.y = 0;
}
Bloco.prototype = {
	atualizar: function(){
		if(this.teclado.pressionada(SETA_DIREITA) && this.x < this.context.canvas.width - this.largura){
			this.x += this.velocidade;
		}
		if(this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0){
			this.x -= this.velocidade;
		}
	},
	desenhar: function(){
		this.context.save();
		this.context.fillStyle = this.cor;
		this.context.fillRect(this.x, this.y, this.largura, this.altura);
		this.context.restore();
	}
}