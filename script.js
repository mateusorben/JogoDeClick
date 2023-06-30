const button = document.getElementById("myButton");

if (button) {
  button.addEventListener("click", function() {
    button.classList.add("pulse");
    setTimeout(function() {
      button.classList.remove("pulse");
    }, 100);
  });
}

let scoreCount = 0;
let addCountScore = 1;
let conquistaContadorClicks = 0;

function buttonSomar() {
    if(dobrouQtdClicks) { 
        addCountScore *= 2;
        scoreCount = (scoreCount - 200) + addCountScore;
        dobrouQtdClicks = false;
        scoreCounPrincipal.innerHTML = scoreCount;
        conquistaContadorClicks++;
        validarConquistasClisk();
        console.log("score = " + scoreCount);
        console.log("cada clique vale = " + addCountScore);
    } else {
        scoreCount += addCountScore;
        scoreCounPrincipal.innerHTML = scoreCount;
        conquistaContadorClicks++;
        validarConquistasClisk();
        console.log("score = " + scoreCount);
        console.log("cada clique vale = " + addCountScore);
    }
};

const scoreCounPrincipal = document.getElementById("scoreCount");
const CountPorClick = document.getElementById("cadaClick");

let valorControlador1Click = 10;
let valorControlador1Click50Desconto = 0;

const valor1Click = document.getElementById("valor1Click");
const countComprado1Click = document.getElementById("countComprado1Click");
let contadorCountComprado1Click = 0;
let mais1ClickApos50Desconto = false;

function mais1Click() {
    let valorAdicionado1Clicks = 1;
    if(dobrouQtdClicksMelhoriaClicks){
        valorAdicionado1Clicks = 2;
    } 
    if(comprou50DescontoBool) {
        valorControlador1Click50Desconto = Math.floor(valorControlador1Click / 2);
        if(scoreCount >= valorControlador1Click50Desconto) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador1Click50Desconto;
            scoreCount -= valorControlador1Click50Desconto;
            let arredondandoValor = Math.floor(valorControlador1Click50Desconto * 1.2);
            valor1Click.innerHTML = arredondandoValor;
            valorControlador1Click50Desconto = arredondandoValor;
            comprou50DescontoBool = false;
            mais1ClickApos50Desconto = true;
            addCountScore += valorAdicionado1Clicks; 
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado1Click++;
            countComprado1Click.innerHTML = contadorCountComprado1Click;
        } else {
            alert("Ainda não há cliques suficientes!");
        }
        
    } else if(mais1ClickApos50Desconto) {
        if(scoreCount >= valorControlador1Click50Desconto) {
            console.log("entrei no apos50")
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador1Click50Desconto;
            scoreCount -= valorControlador1Click50Desconto;
            let arredondandoValor = Math.floor(valorControlador1Click50Desconto * 1.2);
            valor1Click.innerHTML = arredondandoValor;
            valorControlador1Click50Desconto = arredondandoValor;          
            addCountScore += valorAdicionado1Clicks; 
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado1Click++;
            countComprado1Click.innerHTML = contadorCountComprado1Click;
        } else {
            alert("Ainda não há cliques suficientes!");
        }
    } else {
        if(scoreCount >= valorControlador1Click) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador1Click;
            scoreCount -= valorControlador1Click;
            let arredondandoValor = Math.floor(valorControlador1Click * 1.2);
            valor1Click.innerHTML = arredondandoValor;
            valorControlador1Click = arredondandoValor;
            addCountScore += valorAdicionado1Clicks; 
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado1Click++;
            countComprado1Click.innerHTML = contadorCountComprado1Click;
        } else {
            alert("Ainda não há cliques suficientes!");
        }
    } 
}

const valor5Clicks = document.getElementById("valor5Clicks");
const countComprado5Clicks = document.getElementById("countComprado5Clicks");
let contadorCountComprado5Clicks = 0;
let valorControlador5Clicks50Desconto = 0;
let mais5ClicksApos50Desconto = false;

let valorControlador5Clicks = 200;

function mais5Clicks() {
    let valorAdicionadoClicks = 5;
    if (dobrouQtdClicksMelhoriaClicks){
        valorAdicionadoClicks = 10;
    }
    if(comprou50DescontoBool) {
        valorControlador5Clicks50Desconto = Math.floor(valorControlador5Clicks /2);
        if(scoreCount >= valorControlador5Clicks50Desconto){
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador5Clicks50Desconto;
            scoreCount -= valorControlador5Clicks50Desconto;
            let arredondandoValor = Math.floor(valorControlador5Clicks50Desconto * 1.2);
            valor5Clicks.innerHTML = arredondandoValor;
            valorControlador5Clicks50Desconto = arredondandoValor;          
            comprou50DescontoBool = false;
            mais5ClicksApos50Desconto = true;
            addCountScore += valorAdicionadoClicks; 
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado5Clicks++;
            countComprado5Clicks.innerHTML = contadorCountComprado5Clicks;
        }  else {
            alert("Ainda não há cliques suficientes!");
        }
    } else if (mais5ClicksApos50Desconto) {
        if (scoreCount >= valorControlador5Clicks50Desconto) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador5Clicks50Desconto;
            scoreCount -= valorControlador5Clicks50Desconto;
            let arredondandoValor = Math.floor(valorControlador5Clicks50Desconto * 1.2);
            valor5Clicks.innerHTML = arredondandoValor;
            valorControlador5Clicks50Desconto = arredondandoValor;
            addCountScore += valorAdicionadoClicks;
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado5Clicks++;
            countComprado5Clicks.innerHTML = contadorCountComprado5Clicks;
        } else {
            alert("Ainda não há cliques suficientes!");
        }
    } else {
        if(scoreCount >= valorControlador5Clicks) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador5Clicks;
            scoreCount -= valorControlador5Clicks;
            let arredondandoValor = Math.floor(valorControlador5Clicks * 1.2);
            valor5Clicks.innerHTML = arredondandoValor;
            valorControlador5Clicks = arredondandoValor;
            addCountScore += valorAdicionadoClicks;
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado5Clicks++;
            countComprado5Clicks.innerHTML = contadorCountComprado5Clicks;    
        } else {
            alert("Ainda não há cliques suficientes!");
        }
    }
}

const valor3Clicks = document.getElementById("valor3Clicks");
const countComprado3Clicks = document.getElementById("countComprado3Clicks");
let contadorCountComprado3Clicks = 0;
let valorControlador3Clicks50Desconto = 0;
let mais3ClicksApos50Desconto = false;

let valorControlador3Clicks = 50;

function mais3Clicks() {
    let valorAdicionadoClicks = 3;
    if (dobrouQtdClicksMelhoriaClicks){
        valorAdicionadoClicks = 6;
    }
    if(comprou50DescontoBool) {
        valorControlador3Clicks50Desconto = Math.floor(valorControlador3Clicks /2);
        if(scoreCount >= valorControlador3Clicks50Desconto){
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador3Clicks50Desconto;
            scoreCount -= valorControlador3Clicks50Desconto;
            let arredondandoValor = Math.floor(valorControlador3Clicks50Desconto * 1.2);
            valor3Clicks.innerHTML = arredondandoValor;
            valorControlador3Clicks50Desconto = arredondandoValor;          
            comprou50DescontoBool = false;
            mais3ClicksApos50Desconto = true;
            addCountScore += valorAdicionadoClicks; 
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado3Clicks++;
            countComprado3Clicks.innerHTML = contadorCountComprado3Clicks;
        }  else {
            alert("Ainda não há cliques suficientes!");
        }
    } else if (mais3ClicksApos50Desconto) {
        if (scoreCount >= valorControlador3Clicks50Desconto) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador3Clicks50Desconto;
            scoreCount -= valorControlador3Clicks50Desconto;
            let arredondandoValor = Math.floor(valorControlador3Clicks50Desconto * 1.2);
            valor3Clicks.innerHTML = arredondandoValor;
            valorControlador3Clicks50Desconto = arredondandoValor;
            addCountScore += valorAdicionadoClicks;
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado3Clicks++;
            countComprado3Clicks.innerHTML = contadorCountComprado3Clicks;
        } else {
            alert("Ainda não há cliques suficientes!");
        }
    } else {
        if(scoreCount >= valorControlador3Clicks) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador3Clicks;
            scoreCount -= valorControlador3Clicks;
            let arredondandoValor = Math.floor(valorControlador3Clicks * 1.2);
            valor3Clicks.innerHTML = arredondandoValor;
            valorControlador3Clicks = arredondandoValor;
            addCountScore += valorAdicionadoClicks;
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado3Clicks++;
            countComprado3Clicks.innerHTML = contadorCountComprado3Clicks;    
        } else {
            alert("Ainda não há cliques suficientes!");
        }
    }
}

const valor20Clicks = document.getElementById("valor20Clicks");
const countComprado20Clicks = document.getElementById("countComprado20Clicks");
let contadorCountComprado20Clicks = 0;
let valorControlador20Clicks50Desconto = 0;
let mais20ClicksApos50Desconto = false;

let valorControlador20Clicks = 2000;

function mais20Clicks() {
    let valorAdicionadoClicks = 20;
    if (dobrouQtdClicksMelhoriaClicks){
        valorAdicionadoClicks = 40;
    }
    if(comprou50DescontoBool) {
        valorControlador20Clicks50Desconto = Math.floor(valorControlador20Clicks /2);
        if(scoreCount >= valorControlador20Clicks50Desconto){
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador20Clicks50Desconto;
            scoreCount -= valorControlador20Clicks50Desconto;
            let arredondandoValor = Math.floor(valorControlador20Clicks50Desconto * 1.2);
            valor20Clicks.innerHTML = arredondandoValor;
            valorControlador20Clicks50Desconto = arredondandoValor;          
            comprou50DescontoBool = false;
            mais20ClicksApos50Desconto = true;
            addCountScore += valorAdicionadoClicks; 
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado20Clicks++;
            countComprado20Clicks.innerHTML = contadorCountComprado20Clicks;
        }  else {
            alert("Ainda não há cliques suficientes!");
        }
    } else if (mais20ClicksApos50Desconto) {
        if (scoreCount >= valorControlador20Clicks50Desconto) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador20Clicks50Desconto;
            scoreCount -= valorControlador20Clicks50Desconto;
            let arredondandoValor = Math.floor(valorControlador20Clicks50Desconto * 1.2);
            valor20Clicks.innerHTML = arredondandoValor;
            valorControlador20Clicks50Desconto = arredondandoValor;
            addCountScore += valorAdicionadoClicks;
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado20Clicks++;
            countComprado20Clicks.innerHTML = contadorCountComprado20Clicks;
        } else {
            alert("Ainda não há cliques suficientes!");
        }
    } else {
        if(scoreCount >= valorControlador20Clicks) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador20Clicks;
            scoreCount -= valorControlador20Clicks;
            let arredondandoValor = Math.floor(valorControlador20Clicks * 1.2);
            valor20Clicks.innerHTML = arredondandoValor;
            valorControlador20Clicks = arredondandoValor;
            addCountScore += valorAdicionadoClicks;
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado20Clicks++;
            countComprado20Clicks.innerHTML = contadorCountComprado20Clicks;    
        } else {
            alert("Ainda não há cliques suficientes!");
        }
    }
}

const valorAutoClick = document.getElementById("valorAutoClick");
const countCompradoAutoClick = document.getElementById("countCompradoAutoClick");
let valorControladorAutoClick = 100;
let contadorCountCompradoAutoClick = 0;
let valorControladorAutoClick50Desconto = 0;
let autoClickApos50Desconto = false;

function mais1ClickAuto() {
    let valorAdicionadoClicks = 1;
    if (dobrouQtdClicksMelhoriaClicks){
        valorAdicionadoClicks = 2;
    }

    if(comprou50DescontoBool) {
        valorControladorAutoClick50Desconto = Math.floor(valorControladorAutoClick /2);
        if(scoreCount >= valorControladorAutoClick50Desconto){
            scoreCounPrincipal.innerHTML = scoreCount - valorControladorAutoClick50Desconto;
            scoreCount -= valorControladorAutoClick50Desconto;
            let arredondandoValor = Math.floor(valorControladorAutoClick50Desconto * 1.2);
            valorAutoClick.innerHTML = arredondandoValor;
            valorControladorAutoClick50Desconto = arredondandoValor;          
            comprou50DescontoBool = false;
            autoClickApos50Desconto = true;
            contadorCountCompradoAutoClick++;
            countCompradoAutoClick.innerHTML = contadorCountCompradoAutoClick;
            setInterval(function() {
                scoreCounPrincipal.innerHTML = scoreCount += valorAdicionadoClicks;  
            }, 1000);
        }  else {
            alert("Ainda não há cliques suficientes!");
        }
    } else if (autoClickApos50Desconto) {
        if (scoreCount >= valorControladorAutoClick50Desconto) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControladorAutoClick50Desconto;
            scoreCount -= valorControladorAutoClick50Desconto;
            let arredondandoValor = Math.floor(valorControladorAutoClick50Desconto * 1.2);
            valorAutoClick.innerHTML = arredondandoValor;
            valorControladorAutoClick50Desconto = arredondandoValor;
            contadorCountCompradoAutoClick++;
            countCompradoAutoClick.innerHTML = contadorCountCompradoAutoClick;
            setInterval(function() {
                scoreCounPrincipal.innerHTML = scoreCount += valorAdicionadoClicks;  
            }, 1000);
        } else {
            alert("Ainda não há cliques suficientes!");
        }
    } else {
        if(scoreCount >= valorControladorAutoClick) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControladorAutoClick;
            scoreCount -= valorControladorAutoClick;
            let arredondandoValor = Math.floor(valorControladorAutoClick * 1.2);
            valorAutoClick.innerHTML = arredondandoValor;
            valorControladorAutoClick = arredondandoValor;
            contadorCountCompradoAutoClick++;
            countCompradoAutoClick.innerHTML = contadorCountCompradoAutoClick;
            setInterval(function() {
                scoreCounPrincipal.innerHTML = scoreCount += valorAdicionadoClicks;  
            }, 1000); 
        } else {
            alert("Ainda não há cliques suficientes!")
        }
    }
}

const valorAutoClick5 = document.getElementById("valorAutoClick5");
const countCompradoAutoClick5 = document.getElementById("countCompradoAutoClick5");
let valorControladorAutoClick5 = 5000;
let contadorCountCompradoAutoClick5 = 0;
let valorControladorAutoClick50Desconto5 = 0;
let autoClicks5Apos50Desconto = false;

function mais5ClicksAuto() {
    let valorAdicionadoClicks = 5;
    if (dobrouQtdClicksMelhoriaClicks){
        valorAdicionadoClicks = 10;
    }

    if(comprou50DescontoBool) {
        valorControladorAutoClick50Desconto5 = Math.floor(valorControladorAutoClick5 /2);
        if(scoreCount >= valorControladorAutoClick50Desconto5){
            scoreCounPrincipal.innerHTML = scoreCount - valorControladorAutoClick50Desconto5;
            scoreCount -= valorControladorAutoClick50Desconto5;
            let arredondandoValor = Math.floor(valorControladorAutoClick50Desconto5 * 1.2);
            valorAutoClick5.innerHTML = arredondandoValor;
            valorControladorAutoClick50Desconto5 = arredondandoValor;          
            comprou50DescontoBool = false;
            autoClicks5Apos50Desconto = true;
            contadorCountCompradoAutoClick5++;
            countCompradoAutoClick5.innerHTML = contadorCountCompradoAutoClick5;
            setInterval(function() {
                scoreCounPrincipal.innerHTML = scoreCount += valorAdicionadoClicks;  
            }, 1000);
        }  else {
            alert("Ainda não há cliques suficientes!");
        }
    } else if (autoClicks5Apos50Desconto) {
        if (scoreCount >= valorControladorAutoClick50Desconto5) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControladorAutoClick50Desconto5;
            scoreCount -= valorControladorAutoClick50Desconto5;
            let arredondandoValor = Math.floor(valorControladorAutoClick50Desconto5 * 1.2);
            valorAutoClick5.innerHTML = arredondandoValor;
            valorControladorAutoClick50Desconto5 = arredondandoValor;
            contadorCountCompradoAutoClick5++;
            countCompradoAutoClick5.innerHTML = contadorCountCompradoAutoClick5;
            setInterval(function() {
                scoreCounPrincipal.innerHTML = scoreCount += valorAdicionadoClicks;  
            }, 1000);
        } else {
            alert("Ainda não há cliques suficientes!");
        }
    } else {
        if(scoreCount >= valorControladorAutoClick5) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControladorAutoClick5;
            scoreCount -= valorControladorAutoClick5;
            let arredondandoValor = Math.floor(valorControladorAutoClick5 * 1.2);
            valorAutoClick5.innerHTML = arredondandoValor;
            valorControladorAutoClick5 = arredondandoValor;
            contadorCountCompradoAutoClick5++;
            countCompradoAutoClick5.innerHTML = contadorCountCompradoAutoClick5;
            setInterval(function() {
                scoreCounPrincipal.innerHTML = scoreCount += valorAdicionadoClicks;  
            }, 1000); 
        } else {
            alert("Ainda não há cliques suficientes!")
        }
    }
}

let desbloqueou5clicks = false;
let desbloqueou20clicks = false;
let desbloqueou5clicksAuto = false;

const comprou50Desconto = document.getElementById("cromprou50Desconto");
let comprou50DescontoBool = false;
let comprou50DescontoBlock = false;

function desconto50() {
    if(!comprou50DescontoBool) {
        if(scoreCount >= 75000) {
            comprou50Desconto.innerText = "Comprado!"
            comprou50DescontoBool = true;
            valor1Click.innerHTML = Math.floor(valorControlador1Click/2);
            valor3Clicks.innerHTML = Math.floor(valorControlador3Clicks/2);
            valorAutoClick.innerHTML = Math.floor(valorControladorAutoClick/2);
            
            if(desbloqueou5clicks) {
                valor5Clicks.innerHTML = Math.floor(valorControlador5Clicks/2);
            }

            if(desbloqueou20clicks) {
                valor20Clicks.innerHTML = Math.floor(valorControlador20Clicks/2);
            }

            if(desbloqueou5clicksAuto){
                valorAutoClick5.innerHTML = Math.floor(valorControladorAutoClick5/2);
            }
            
            scoreCounPrincipal.innerHTML = scoreCount - 75000;
            scoreCount -= 75000;
        } else {
            alert("Ainda não há cliques suficientes!")
        }
         
    } else {
        alert("Você já comprou esse item!")
    }
    
}

const comprouDobraQtdClicks = document.getElementById("cromprouDobraQtdClicks");
let dobrouQtdClicks = false;
let comprouDobraQtdClicksBlock = false;

function dobraQtdClicks() {
    if(comprouDobraQtdClicksBlock != true) {
        if(scoreCount >= 200000) {
            scoreCounPrincipal.innerHTML = scoreCount - 200000;
            dobrouQtdClicks = true;
            CountPorClick.innerHTML = addCountScore *2;
            comprouDobraQtdClicks.innerText = "Comprado!"
            comprouDobraQtdClicksBlock = true; 
            scoreCount -= 200000;
        } else {
            alert("Ainda não há cliques suficientes!");
        }
    } else {
        alert("Você já comprou esse item!");
    }
}

const comprouDobraQtdClicksMelhoriaClicks = document.getElementById("comprouDobraQtdClicksMelhoriaClicks");
const dobrouQtdClicksMelhoriaNumero1 = document.getElementById("dobrouQtdClicksMelhoriaNumero1");
const dobrouQtdClicksMelhoriaNumero3 = document.getElementById("dobrouQtdClicksMelhoriaNumero3");
const dobrouQtdClicksMelhoriaNumero5 = document.getElementById("dobrouQtdClicksMelhoriaNumero5");
const dobrouQtdClicksMelhoriaNumero20 = document.getElementById("dobrouQtdClicksMelhoriaNumero20");
const dobrouQtdClicksMelhoriaNumeroAuto = document.getElementById("dobrouQtdClicksMelhoriaNumeroAuto");
const dobrouQtdClicksMelhoriaNumeroAuto5 = document.getElementById("dobrouQtdClicksMelhoriaNumeroAuto5");
let dobrouQtdClicksMelhoriaClicks = false;
let dobrouQtdClicksMelhoriaClicksBlock = false;

function dobraQtdClicksMelhoriaClicks() {
    if(dobrouQtdClicksMelhoriaClicksBlock != true){
        if(scoreCount >= 500000) {
            scoreCounPrincipal.innerHTML = scoreCount - 500000;
            scoreCount -= 500000;
            dobrouQtdClicksMelhoriaClicks = true;
            comprouDobraQtdClicksMelhoriaClicks.innerText = "Comprado!";
            dobrouQtdClicksMelhoriaClicksBlock = true;
            dobrouQtdClicksMelhoriaNumero1.innerHTML = "2";
            dobrouQtdClicksMelhoriaNumero3.innerHTML = "6";
            dobrouQtdClicksMelhoriaNumeroAuto.innerHTML = "2";
            
            if(desbloqueou5clicks){
                dobrouQtdClicksMelhoriaNumero5.innerHTML = "10";
            }

            if(desbloqueou20clicks){
                dobrouQtdClicksMelhoriaNumero20.innerHTML = "40";
            }
            
            if(desbloqueou5clicksAuto){
                dobrouQtdClicksMelhoriaNumeroAuto5.innerHTML = "10";
            }
        } else {
            alert("Ainda não há cliques suficientes!");
        }
    } else {
        alert("Você já comprou esse item!");
    }
}

//CONQUISTAS VALIDACOES

const conquista10 = document.getElementById("conquista10");
const conquistaMil = document.getElementById("conquistaMil");
const conquista5Mil = document.getElementById("conquista5Mil");
const conquista10Mil = document.getElementById("conquista10Mil");
const conquista50Mil = document.getElementById("conquista50Mil");
const conquista100Mil = document.getElementById("conquista100Mil");
const conquista500Mil = document.getElementById("conquista500Mil");
const toastLiveExample = document.getElementById('liveToast')
const toast_body = document.getElementById('toast-body');

const btnMais5Clicks = document.getElementById('btnMais5Clicks');
const popoverRemoverAprendiz = document.getElementById('popoverRemoverAprendiz');
const dobrouQtdClicksMelhoriaNumero5Desbloquear = document.getElementById('dobrouQtdClicksMelhoriaNumero5');
const valor5ClicksDesbloquear = document.getElementById('valor5Clicks');

const btnMais20Clicks = document.getElementById('btnMais20Clicks');
const popoverRemoverJunior = document.getElementById('popoverRemoverJunior');
const dobrouQtdClicksMelhoriaNumero20Desbloquear = document.getElementById('dobrouQtdClicksMelhoriaNumero20');
const valor20ClicksDesbloquear = document.getElementById('valor20Clicks');

const btnMais5ClicksAuto = document.getElementById('btnMais5ClicksAuto');
const popoverRemoverPleno = document.getElementById('popoverRemoverPleno');
const dobrouQtdClicksMelhoriaNumeroAuto5Desbloquear = document.getElementById('dobrouQtdClicksMelhoriaNumeroAuto5');
const valor5ClicksAutoDesbloquear = document.getElementById('valorAutoClick5');

const nivel_jogador_navbar = document.getElementById('nivel-jogador-navbar');

function validarConquistasClisk() {
    if(conquistaContadorClicks <= 10) {
        conquista10.innerHTML = conquistaContadorClicks;
        if (conquistaContadorClicks == 10) {     
            toast_body.innerText = "Clicador Aprendiz | 10 Cliques";         
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
            nivel_jogador_navbar.innerText = 'Clicador Aprendiz';
            btnMais5Clicks.removeAttribute('disabled');
            popoverRemoverAprendiz.style.display = 'none';
            dobrouQtdClicksMelhoriaNumero5Desbloquear.innerHTML = '5';
            valor5ClicksDesbloquear.innerHTML = '200';
            desbloqueou5clicks = true;
        } 
    } 
    if(conquistaContadorClicks <= 1000){
        conquistaMil.innerHTML = conquistaContadorClicks;
        if (conquistaContadorClicks == 1000) {     
            toast_body.innerText = "Clicador Junior | 1000 Cliques";         
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
            nivel_jogador_navbar.innerText = 'Clicador Junior';
            btnMais20Clicks.removeAttribute('disabled');
            popoverRemoverJunior.style.display = 'none';
            dobrouQtdClicksMelhoriaNumero20Desbloquear.innerHTML = '20';
            valor20ClicksDesbloquear.innerHTML = '2000';
            desbloqueou20clicks = true;
        } 
    }
    if(conquistaContadorClicks <= 5000){
        conquista5Mil.innerHTML = conquistaContadorClicks;
        if (conquistaContadorClicks == 5000) {     
            toast_body.innerText = "Clicador Pleno | 5000 Cliques";         
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
            nivel_jogador_navbar.innerText = 'Clicador Pleno';
            btnMais5ClicksAuto.removeAttribute('disabled');
            popoverRemoverPleno.style.display = 'none';
            dobrouQtdClicksMelhoriaNumeroAuto5Desbloquear.innerHTML = '5';
            valor5ClicksAutoDesbloquear.innerHTML = '5000';
            desbloqueou5clicksAuto = true;
        } 
    }
    if(conquistaContadorClicks <= 10000){
        conquista10Mil.innerHTML = conquistaContadorClicks;
        if (conquistaContadorClicks == 10000) {     
            toast_body.innerText = "Clicador Senior | 10000 Cliques";         
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
            nivel_jogador_navbar.innerText = 'Clicador Senior';
        } 
    }
    if(conquistaContadorClicks <= 50000){
        conquista50Mil.innerHTML = conquistaContadorClicks;
        if (conquistaContadorClicks == 50000) {     
            toast_body.innerText = "Mega Clicador | 50000 Cliques";         
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
            nivel_jogador_navbar.innerText = 'Mega Clicadorz';
        } 
    }
    if(conquistaContadorClicks <= 100000){
        conquista100Mil.innerHTML = conquistaContadorClicks;
        if (conquistaContadorClicks == 100000) {     
            toast_body.innerText = "Ultra Master Clicador | 100000 Cliques";         
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
            nivel_jogador_navbar.innerText = 'Ultra Master Clicador';
        } 
    }
    if(conquistaContadorClicks <= 500000){
        conquista500Mil.innerHTML = conquistaContadorClicks;
        if (conquistaContadorClicks == 500000) {     
            toast_body.innerText = "Você Realmente é um Clicador | 500000 Cliques";         
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
            nivel_jogador_navbar.innerText = 'Você Realmente é um Clicador';
        } 
    }
    
}


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

function adjustFooterPosition() {
    const body = document.querySelector('body');
    const footer = document.querySelector('footer');
    const bodyHeight = body.offsetHeight;
    const windowHeight = window.innerHeight;
    if (bodyHeight < windowHeight) {
       footer.style.position = 'fixed';
       footer.style.bottom = '0';
    } else {
       footer.style.position = 'static';
    }
 }
 window.addEventListener('resize', adjustFooterPosition);
