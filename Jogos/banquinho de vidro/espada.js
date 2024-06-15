function Espada(context, bloco){
    this.ctx = context;
    this.largura = 0;
    this.altura = 0;
    this.velocidade = 0;
    this.cor = "black";
    this.x = 0;
    this.y = 0;
    this.angulo = 0;
    this.bloco = bloco
    this.xMouse = 0;
    this.yMouse = 0;
    this.c = 0;
}
Espada.prototype = {
    atualizar: function(atacar){
        if(atacar){
            this.tempo = -1;
            this.anguloAtual = this.angulo;
        }else if(this.tempo < 1){
        // movimento da espada usando equacao CUBICA
            this.angulo = this.anguloAtual+(5*this.tempo**3 - 5*this.tempo);
            this.tempo += 0.1;
        /*  codigo original movimento da espada
        }else if(this.c){
            if(this.c<=360 && this.c>270){
                this.angulo -= this.velocidade*Math.PI/180;
            }else if(this.c<=270 && this.c>90){
                this.angulo += this.velocidade*Math.PI/180;
            }else if(this.c<=90 && this.c>0){
                this.angulo -= this.velocidade*Math.PI/180;
            }
            this.c -= this.velocidade;*/
        }else{
            this.angulo = Math.atan2(this.yMouse - bloco.y, this.xMouse - bloco.x);
        }
    },
    desenhar: function(){
        this.ctx.save();
        this.ctx.translate(this.bloco.x+this.bloco.largura/2 , this.bloco.y+this.bloco.altura/2);
        this.ctx.rotate(this.angulo);
        this.ctx.fillStyle = this.cor;
        this.ctx.fillRect(this.x, this.y, this.largura, this.altura);
        this.ctx.restore();
    }
}