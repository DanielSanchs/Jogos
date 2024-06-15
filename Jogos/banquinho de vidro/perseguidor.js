function Perseguidor(context, bloco){
	this.context = context;
	this.largura = 0;
	this.altura = 0;
	this.velocidade = 0;
	this.cor = "black";
	this.x = 0;
	this.y = 0;
    this.bloco = bloco;
    this.d = 0;
    this.r = 0;
}
Perseguidor.prototype = {
	atualizar: function(){
		/*
		let xd = ((this.bloco.y*this.x - this.y*this.bloco.x)/(this.bloco.y-this.y));
		let yd = this.velocidade*((this.bloco.y-this.y)/-(this.x-this.bloco.x));
		this.x -= xd;
		this.y -= yd;
        
		document.getElementById('sdfghj').innerHTML = this.x;
		document.getElementById('sdfgh').innerHTML = this.y;`
		*/
        
		this.d = Math.sqrt(Math.pow((this.bloco.x-this.x), 2)+Math.pow((this.bloco.y-this.y), 2));
        this.r = this.velocidade/(this.d - this.velocidade);
        if(this.d >= this.largura){
            this.x += ((this.bloco.x-this.x)*this.r);
            this.y += ((this.bloco.y-this.y)*this.r);
        }
	},
	desenhar: function(){
		this.context.save();
		this.context.fillStyle = this.cor;
		this.context.fillRect(this.x, this.y, this.largura, this.altura);
		this.context.restore();
	}
}