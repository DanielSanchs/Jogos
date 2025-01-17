function Ovni(context, imagen, explosao){
	this.context = context;
	this.imagen = imagen;
	this.imgExplosao = explosao;
	this.x = 0;
	this.y = 0;
	this.velocidade = 0;
}
Ovni.prototype = {
	atualizar: function(){
		this.y += this.velocidade * this.animacao.decorrido / 1000;

		if(this.y > this.context.canvas.height){
			this.animacao.excluirSprite(this);
			this.colisor.excluirSprite(this);
		}
	},
	desenhar: function(){
		this.context.drawImage(this.imagen, this.x, this.y, this.imagen.width, this.imagen.height);
	},
	retangulosColisao: function(){
		var rets = [{x: this.x+20, y: this.y+1, largura: 25, altura: 10},
					{x: this.x+2, y: this.y+11, largura: 60, altura: 12},
					{x: this.x+20, y: this.y+23, largura: 25, altura: 7}];
		/*
		var ctx = this.context;
		for (var i in rets) {
		ctx.save();
		ctx.strokeStyle = 'yellow';
		ctx.strokeRect(rets[i].x, rets[i].y, rets[i].largura,rets[i].altura);
		ctx.restore();
		}
		*/
		return rets;
	},
	colidiuCom: function(outro){
		if(outro instanceof Tiro){
			this.animacao.excluirSprite(this);
			this.colisor.excluirSprite(this);
			this.animacao.excluirSprite(outro);
			this.colisor.excluirSprite(outro);

			var explosao = new Explosao(this.context, this.imgExplosao, this.x, this.y);
			this.animacao.novoSprite(explosao);
		}
	}
}