    function Adaga(context, xBloco, yBloco){
        this.ctx = context;
        this.largura = 0;
        this.altura = 0;
        this.velocidade = 0;
        this.cor = "black";
        this.x = 0;
        this.yReal = 0;
        this.y = 0;
        this.angulo = 0;
        this.xBloco = xBloco;
        this.yBloco = yBloco;
    }
    Adaga.prototype = {
        atualizar: function(){
            this.x += this.velocidade;
            this.yReal = this.x*Math.sin(this.angulo)+this.yBloco;
        },
        desenhar: function(){
            this.ctx.save();
            this.ctx.translate(this.xBloco , this.yBloco);
            this.ctx.rotate(this.angulo);
            this.ctx.fillStyle = this.cor;
            this.ctx.fillRect(this.x, this.y, this.largura, this.altura);
            this.ctx.restore();
        }
    }