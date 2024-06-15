function Animacao(context){
	this.context = context;
	this.sprites = [];
	this.ligado = false;
}
Animacao.prototype = {
	novoSprite: function(sprite){
		this.sprites.push(sprite);
	},
	ligar: function(){
		this.ligado = true;
		this.proximoFrame();
	},
	desligar: function(){
		this.ligado = false;
	},
	proximoFrame: function(){
		//testa se a animacao está ligada
		if(!this.ligado){
			return
		}

		//limpa a tela
		this.limparTela();

		//chama o metodo atualizar dos sprites
		for(var i in this.sprites){
			this.sprites[i].atualizar();
		}

		//chama o metodo desenhar dos sprites
		for(var i in this.sprites){
			this.sprites[i].desenhar();
		}
		var animacao = this;
		requestAnimationFrame(function(){
			animacao.proximoFrame();
		});
	},
	limparTela: function(){
		this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
	}
}