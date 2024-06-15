function Bloco(context, teclado){
	this.context = context;
	this.teclado = teclado;
	this.largura = 0;
	this.altura = 0;
	this.velocidade = 0;
	this.cor = "black";
	this.x = 0;
	this.y = 0;
	this.animacao = 0;
	this.mouseX = 0;
	this.mouseY = 0;

}
Bloco.prototype = {
	atualizar: function(){
		if(this.teclado.pressionada(D) && this.x < this.context.canvas.width - this.largura){
			this.x += this.velocidade;
		}
		if(this.teclado.pressionada(A) && this.x > 0){
			this.x -= this.velocidade;
		}
		if(this.teclado.pressionada(W) && this.y > 0){
			this.y -= this.velocidade;
		}
		if(this.teclado.pressionada(S) && this.y < this.context.canvas.height - this.altura){
			this.y += this.velocidade;
		}		
	},
	desenhar: function(){
		this.context.save();
		this.context.fillStyle = this.cor;
		this.context.fillRect(this.x, this.y, this.largura, this.altura);
		this.context.restore();
	},
	atirar: function(xMouse, yMouse){
		var adaga = new Adaga(this.context, this.x, this.y);
		adaga.cor = "yellow";
		adaga.largura = 16;
		adaga.altura = 6;
		adaga.velocidade = 1;
		adaga.angulo = Math.atan2(yMouse - bloco.y, xMouse - bloco.x);
		this.animacao.novoSprite(adaga);
	}
}