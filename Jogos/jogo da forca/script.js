
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let listaDinamica = [];
let tentativa = 6;

const palavras = [
    palavra001={
        nome: "IRLANDA",
        categoria: "PAÍS"
    },
    palavra002={
        nome: "EQUADOR",
        categoria: "PAÍS"
    },
    palavra003={
        nome: "CHILE",
        categoria: "PAÍS"
    },
    palavra004={
        nome: "INDONESIA",
        categoria: "PAÍS"
    },
    palavra005={
        nome: "AUSTRALIA",
        categoria: "PAÍS"
    },
    palavra006={
        nome: "MALDIVAS",
        categoria: "ILHA"
    },
    palavra007={
        nome: "INGLATERRA",
        categoria: "PAÍS"
    },
    palavra008={
        nome: "MADAGASCAR",
        categoria: "ILHA"
    },
    palavra009={
        nome: "PARAGUAI",
        categoria: "PAÍS"
    },
    palavra0010={
        nome: "BRASIL",
        categoria: "PAÍS"
    },
    palavra0011={
        nome: "NAVIO",
        categoria: "TRANSPORTES"
    },
    palavra0012={
        nome: "MOTOCICLETA",
        categoria: "TRANSPORTES"
    },
    palavra0013={
        nome: "AERONAVE",
        categoria: "TRANSPORTES"
    },
    palavra0014={
        nome: "BARCO",
        categoria: "TRANSPORTES"
    },
    palavra0015={
        nome: "ONIBUS",
        categoria: "TRANSPORTES"
    },
    palavra0016={
        nome: "ARROZ",
        categoria: "COMIDA"
    },
    palavra0017={
        nome: "CARNE",
        categoria: "COMIDA"
    },
    palavra0018={
        nome: "SUSHI",
        categoria: "COMIDA"
    },
    palavra0019={
        nome: "ESFIHA",
        categoria: "COMIDA"
    },
    palavra0020={
        nome: "BISCOITO",
        categoria: "COMIDA"
    },
    palavra0021={
        nome: "PIPOCA",
        categoria: "COMIDA"
    },
    palavra0022={
        nome: "FOGAO",
        categoria: "ELETRODOMÉSTICO"
    },
    palavra0023={
        nome: "LIQUIDIFICADOR",
        categoria: "ELETRODOMÉSTICO"
    },
    palavra0024={
        nome: "GELADEIRA",
        categoria: "ELETRODOMÉSTICO"
    },
    palavra0025={
        nome: "MICROONDAS",
        categoria: "ELETRODOMÉSTICO"
    },
    palavra0026={
        nome: "FORNO",
        categoria: "ELETRODOMÉSTICO"
    },
    palavra0027={
        nome: "TORRADEIRA",
        categoria: "ELETRODOMÉSTICO"
    },
    palavra0028={
        nome: "BATEDEIRA",
        categoria: "ELETRODOMÉSTICO"
    },
    palavra0029={
        nome: "TOMATE",
        categoria: "FRUTA"
    },
    palavra0030={
        nome: "ABACAXI",
        categoria: "FRUTA"
    },
    palavra0031={
        nome: "JABUTICABA",
        categoria: "FRUTA"
    },
    palavra0032={
        nome: "MORANGO",
        categoria: "FRUTA"
    },
    palavra0033={
        nome: "BANANA",
        categoria: "FRUTA"
    },
    palavra0034={
        nome: "PERA",
        categoria: "FRUTA"
    },
    palavra0035={
        nome: "LARANJA",
        categoria: "FRUTA"
    },
    palavra0036={
        nome: "KIWI",
        categoria: "FRUTA"
    },
    palavra0037={
        nome: "AMEIXA",
        categoria: "FRUTA"
    },
    palavra0038={
        nome: "MELANCIA",
        categoria: "FRUTA"
    },
    palavra0039={
        nome: "TAMARINDO",
        categoria: "FRUTA"
    },
    palavra0040={
        nome: "PESSEGO",
        categoria: "FRUTA"
    },
    palavra0041={
        nome: "LARANJA",
        categoria: "COR"
    },
    palavra0042={
        nome: "AZUL",
        categoria: "COR"
    },
    palavra0043={
        nome: "AMARELO",
        categoria: "COR"
    },
    palavra0044={
        nome: "BEGE",
        categoria: "COR"
    },
    palavra0045={
        nome: "CIANO",
        categoria: "COR"
    },
    palavra0046={
        nome: "ROXO",
        categoria: "COR"
    },
    palavra0047={
        nome: "CINZA",
        categoria: "COR"
    },
    palavra0048={
        nome: "DOURADO",
        categoria: "COR"
    },
    palavra0049={
        nome: "ESMERALDA",
        categoria: "COR"
    },
    palavra0050={
        nome: "MAGENTA",
        categoria: "COR"
    },
    palavra0051={
        nome: "CACHORRO",
        categoria: "ANIMAL"
    },
    palavra0052={
        nome: "HIPOPOTAMO",
        categoria: "ANIMAL"
    },
    palavra0053={
        nome: "ELEFANTE",
        categoria: "ANIMAL"
    },
    palavra0054={
        nome: "PASSARO",
        categoria: "ANIMAL"
    },
    palavra0055={
        nome: "URSO",
        categoria: "ANIMAL"
    },
    palavra0056={
        nome: "ORNITORRINCO",
        categoria: "ANIMAL"
    },
    palavra0057={
        nome: "MORCEGO",
        categoria: "ANIMAL"
    },
    palavra0058={
        nome: "CASCAVEL",
        categoria: "ANIMAL"
    },
    palavra0059={
        nome: "CROCODILO",
        categoria: "ANIMAL"
    },
    palavra0060={
        nome: "TUBARAO",
        categoria: "ANIMAL"
    },
    palavra0061={
        nome: "PINGUIM",
        categoria: "ANIMAL"
    },
    palavra0062={
        nome: "AVESTRUZ",
        categoria: "ANIMAL"
    },
    palavra0063={
        nome: "RAPOSA",
        categoria: "ANIMAL"
    },
    palavra0064={
        nome: "PIRARUCU",
        categoria: "ANIMAL"
    },
    palavra0065={
        nome: "RINOCERONTE",
        categoria: "ANIMAL"
    },
    palavra0066={
        nome: "CHUVEIRO",
        categoria: "OBJETOS"
    },
    palavra0067={
        nome: "GARRAFA",
        categoria: "OBJETOS"
    },
    palavra0068={
        nome: "CELULAR",
        categoria: "OBJETOS"
    },
    palavra0069={
        nome: "LIXEIRO",
        categoria: "OBJETOS"
    },
    palavra0066={
        nome: "CHALEIRA",
        categoria: "OBJETOS"
    },
    palavra0070={
        nome: "MOCHILA",
        categoria: "OBJETOS"
    },
    palavra0071={
        nome: "APONTADOR",
        categoria: "OBJETOS"
    },
    palavra0066={
        nome: "COMPUTADOR",
        categoria: "OBJETOS"
    },
    palavra0072={
        nome: "ESCRIVANINHA",
        categoria: "OBJETOS"
    },
    palavra0073={
        nome: "OCULOS",
        categoria: "OBJETOS"
    },
    palavra0074={
        nome: "ESTANTE",
        categoria: "OBJETOS"
    },
    palavra0075={
        nome: "CHURRASQUEIRA",
        categoria: "OBJETOS"
    },
    


    

];

//MODIFICADO DAQUI
let caracteres = [];
let num,caracter;
let numDica=0;
criarPalavraSecreta();
function dica(){
    if(palavraSecretaSorteada.length >= 5){
        numDica = 3;
    }else{
        numDica = 2;
    }

    for(let i=0;i<palavraSecretaSorteada.length;i++){
        caracteres[i] = palavraSecretaSorteada.substring(i,i+1);
    }
}
function gerarDica(){    
    if(numDica > 0){
        num = parseInt(Math.random() * caracteres.length)
        caracter = caracteres[num];
        mudarStyleLetra("tecla-" + caracter);
        comparar(caracter);
        montarPalavraNaTela();
        for(let i=0;i<caracteres.length;i++){
            if(caracter == caracteres[i]){
                caracteres = caracteres.filter(function(item) {
                    return item !== caracter;
                });
            }
        }
        numDica--
    }
}

function codigoMestre(){
    if(document.getElementById("tecla-D").disabled && document.getElementById("tecla-A").disabled && document.getElementById("tecla-N").disabled && document.getElementById("tecla-I").disabled){
        perdeu();
    }
    if(document.getElementById("tecla-B").disabled && document.getElementById("tecla-I").disabled && document.getElementById("tecla-U").disabled && document.getElementById("tecla-L").disabled && document.getElementById("tecla-A").disabled){
        ganhou();
    }
}
//ATÉ AQUI
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
    dica();
}

montarPalavraNaTela();

function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = " ";

    for(i=0; i<palavraSecretaSorteada.length; i++){
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp";
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" +listaDinamica[i]+ "</div>"
        }else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" +listaDinamica[i]+ "</div>"
        }

    }
}

function verificaLetraEscolhida(letra){
    numDica--;
    document.getElementById("tecla-"+ letra).disabled = true;
    codigoMestre();
    if(numDica == 0){mudarStyleLetra("tecla-?");}
    if (tentativa > 0) {

        mudarStyleLetra("tecla-" + letra);
        comparar(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#6A5ACD";
    document.getElementById(tecla).style.color= "#ffffff"
}

function comparar(letra){
    const pos = palavraSecretaSorteada.indexOf(letra);
    if (pos < 0) {
        tentativa--;
        imgForca();

        if(tentativa == 0){
            perdeu();
        }

    }else{
        for(i=0; i < palavraSecretaSorteada.length; i++){
            
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let venceu = true;
    for(i=0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            venceu= false;

        }

    }

    if(venceu == true){
        ganhou();
        tentativa = 0;
         
    }

}

function imgForca(){
    switch(tentativa){
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca2.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca3.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca4.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca5.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca6.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca7.png')";
            break;
            default:
            document.getElementById("imagem").style.background = "url('./img/forca1.png')";
            break;

    }


}

function perdeu(){
    window.location.replace("https://biularambo.github.io/JogoForca/gameover.html");
}

function ganhou(){
    window.location.replace("https://biularambo.github.io/JogoForca/vencedor.html");
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function(){
   location.reload();
   dica();
});

