var A = 65;
var D = 68;
var W = 87;
var S = 83;
var espaco = 32;


function Teclado(elemento){
	this.pressionadas = [];

	var teclado = this;
	elemento.addEventListener("keydown", function(evento){
		teclado.pressionadas[evento.keyCode] = true
	});
	elemento.addEventListener("keyup", function(evento){
		teclado.pressionadas[evento.keyCode] = false
	});
}
Teclado.prototype = {
	pressionada: function(tecla){
		return this.pressionadas[tecla];
	}
}