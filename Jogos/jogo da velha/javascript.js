
    var prompt=document.getElementById("prompt");
    var jogador = "Jogador 1";
    var cont = 0;
    var tabelaJogo = [0,0,0,0,0,0,0,0,0]
    var cor = ["yellow","green", "blue", "red", "pink", "orange", "purple", "grey", "brown"];
    var ctx = [];
    var canvas = [];
    var ids = ["canvas1", "canvas2", "canvas3", "canvas4", "canvas5", "canvas6", "canvas7", "canvas8", "canvas9"];
    var travado = false;

    for(let i=0;i<9;i++){
        canvas[i] = document.getElementById(ids[i]);
        ctx[i] = canvas[i].getContext("2d");
    }

    prompt.innerText = "Jogador 1: x";
    quadro();

    for(let i=0;i<9;i++){
        canvas[i].addEventListener("click", function(){
            botao(ctx[i],i);
        });
    }

function jogarNovamente(){
    quadro();
    for(let i=0; i<tabelaJogo.length; i++){
        tabelaJogo[i] = 0;
    }
    prompt.innerText = "Jogador 1: x";
    jogador = "Jogador 1";
    cont = 0;
    travado = false;
}

function rodada(){
    if(jogador == "Jogador 2"){
        prompt.innerText = "Jogador 1: x";
    }else{
        prompt.innerText = "Jogador 2: circulo";
    }
}
function testeVitoria(){
    for(let i=1;i<3;i++){
        if(tabelaJogo[0] == i && tabelaJogo[1] == i && tabelaJogo[2] == i){
            prompt.innerText = "Vitória do "+jogador;
            travado = true;
            return;
        }else if(tabelaJogo[3] == i && tabelaJogo[4] == i && tabelaJogo[5] == i){
            prompt.innerText = "Vitória do "+jogador;
            travado = true;
            return;
        }else if(tabelaJogo[6] == i && tabelaJogo[7] == i && tabelaJogo[8] == i){
            prompt.innerText = "Vitória do "+jogador;
            travado = true;
            return;
        }else if(tabelaJogo[0] == i && tabelaJogo[3] == i && tabelaJogo[6] == i){
            prompt.innerText = "Vitória do "+jogador;
            travado = true;
            return;
        }else if(tabelaJogo[1] == i && tabelaJogo[4] == i && tabelaJogo[7] == i){
            prompt.innerText = "Vitória do "+jogador;
            travado = true;
            return;
        }else if(tabelaJogo[2] == i && tabelaJogo[5] == i && tabelaJogo[8] == i){
            prompt.innerText = "Vitória do "+jogador;
            travado = true;
            return;
        }else if(tabelaJogo[0] == i && tabelaJogo[4] == i && tabelaJogo[8] == i){
            prompt.innerText = "Vitória do "+jogador;
            travado = true;
            return;
        }else if(tabelaJogo[2] == i && tabelaJogo[4] == i && tabelaJogo[6] == i){
            prompt.innerText = "Vitória do "+jogador;
            travado = true;
            return;
        }else if(cont == 9){
            prompt.innerText = "Deu velha!";
            return; 
        }
        rodada();
    }
}		
function botao(ctx, j){
    if(!travado){
        while(tabelaJogo[j] == 0){
            if(jogador == "Jogador 1"){
                ctx.beginPath();
                ctx.moveTo(20,20);
                ctx.lineTo(180,180);
                ctx.moveTo(180,20);
                ctx.lineTo(20,180);
                ctx.lineWidth = 30;
                ctx.strokeStyle = "black";
                ctx.stroke();
                tabelaJogo[j] = 1;
                cont++;
                testeVitoria();
                jogador = "Jogador 2";
            }else{
                ctx.beginPath();
                ctx.arc(100,100,70,0,2*Math.PI);
                ctx.strokeStyle = "black";
                ctx.lineWidth = 30;
                ctx.stroke();
                tabelaJogo[j] = 2;
                cont++;
                testeVitoria();
                jogador = "Jogador 1";
            }
        }
    }
}
function quadro(){
    for(let i=0;i<9;i++){
        ctx[i].fillStyle = cor[i];
        ctx[i].fillRect(0,0,200,200);
    }
    
}


