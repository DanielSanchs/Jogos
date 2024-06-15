function Mouse(bloco, espada){
    this.bloco = bloco;
	this.espada = espada;

	document.addEventListener("click", function(evento){
		//bloco.mouseX = evento.offsetX + 13;
		//bloco.mouseY = evento.offsetY + 13;	
		bloco.atirar(evento.offsetX + 13, evento.offsetY + 13);
		//espada.atualizar(true);
	});
	document.addEventListener("mousemove", function(evento){	
		espada.xMouse = evento.offsetX + 13;
		espada.yMouse = evento.offsetY + 13;
	});
}
Mouse.prototype = {

}