
var SOM_TIRO = new Audio();
SOM_TIRO.src = "snd/tiro.mp3";
SOM_TIRO.volume = 0.2;
SOM_TIRO.load();
function Tiro(context, nave){
	this.context = context;
	this.nave;

	this.largura = 6;
	this.altura = 12;
	this.x = nave.x + 18 - this.largura / 2;
	this.y = nave.y;
	this.velocidade = 800;
	this.cor = "red";

	SOM_TIRO.currentTime = 0.0;
	SOM_TIRO.play();
}
Tiro.prototype = {
	atualizar: function(){
		this.y -= this.velocidade * this.animacao.decorrido / 1000;

		if(this.y < -this.altura){
			this.colisor.excluirSprite(this);
			this.animacao.excluirSprite(this);
		}
	},
	desenhar: function(){
		this.context.save();
		this.context.fillStyle = this.cor;
		this.context.fillRect(this.x, this.y, this.largura, this.altura);
		this.context.restore();
	},
	retangulosColisao: function(){
		return [{
			x: this.x,
			y: this.y,
			largura: this.largura,
			altura: this.altura
		}]
	},
	colidiuCom: function(){
		
	}
}