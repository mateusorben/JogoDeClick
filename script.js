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
    let valorAdicionado1Clisk = 1;
    if(dobrouQtdClicksMelhoriaClicks){
        valorAdicionado1Clisk = 2;
    } 
    if(comprou50DescontoBool1Click) {
        valorControlador1Click50Desconto = Math.floor(valorControlador1Click / 2);
        if(scoreCount >= valorControlador1Click50Desconto) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador1Click50Desconto;
            scoreCount -= valorControlador1Click50Desconto;
            let arredondandoValor = Math.floor(valorControlador1Click50Desconto * 1.2);
            valor1Click.innerHTML = arredondandoValor;
            valorControlador1Click50Desconto = arredondandoValor;
            comprou50DescontoBool1Click = false;
            mais1ClickApos50Desconto = true;
            addCountScore += valorAdicionado1Clisk; 
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
            addCountScore += valorAdicionado1Clisk; 
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
            addCountScore += valorAdicionado1Clisk; 
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado1Click++;
            countComprado1Click.innerHTML = contadorCountComprado1Click;
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
    let valorAdicionadoClisk = 3;
    if (dobrouQtdClicksMelhoriaClicks){
        valorAdicionadoClisk = 6;
    }
    if(comprou50DescontoBool3Clicks) {
        valorControlador3Clicks50Desconto = Math.floor(valorControlador3Clicks /2);
        console.log("Valor que arredondou = " + valorControlador3Clicks50Desconto)
        if(scoreCount >= valorControlador3Clicks50Desconto){
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador3Clicks50Desconto;
            scoreCount -= valorControlador3Clicks50Desconto;
            let arredondandoValor = Math.floor(valorControlador3Clicks50Desconto * 1.2);
            valor3Clicks.innerHTML = arredondandoValor;
            valorControlador3Clicks50Desconto = arredondandoValor;          
            comprou50DescontoBool3Clicks = false;
            mais3ClicksApos50Desconto = true;
            addCountScore += valorAdicionadoClisk; 
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
            addCountScore += valorAdicionadoClisk;
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
            addCountScore += valorAdicionadoClisk;
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado3Clicks++;
            countComprado3Clicks.innerHTML = contadorCountComprado3Clicks;    
        } else {
            alert("Ainda não há cliques suficientes!");
        }
    }
}
const valorAutoClick = document.getElementById("valorAutoClick");
const countCompradoAutoClick = document.getElementById("countCompradoAutoClick");
let valorControladorAutoClick = 100;
let contadorCountCompradoAutoClick = 0;

function mais1ClickAuto() {
    if(scoreCount >= valorControladorAutoClick) {
        scoreCounPrincipal.innerHTML = scoreCount - valorControladorAutoClick;
        scoreCount -= valorControladorAutoClick;
        let arredondandoValor = Math.floor(valorControladorAutoClick * 1.2);
        valorAutoClick.innerHTML = arredondandoValor;
        valorControladorAutoClick = arredondandoValor;
        contadorCountCompradoAutoClick++;
        countCompradoAutoClick.innerHTML = contadorCountCompradoAutoClick;
        setInterval(function() {
            scoreCounPrincipal.innerHTML = scoreCount++;  
        }, 1000); 
    } else {
        alert("Ainda não há cliques suficientes!")
    }
}

const comprou50Desconto = document.getElementById("cromprou50Desconto");
let comprou50DescontoBool1Click = false;
let comprou50DescontoBool3Clicks = false;
let comprou50DescontoBlock = false;

function desconto50() {
    if(comprou50DescontoBool1Click != true && comprou50DescontoBool3Clicks != true) {
        if(scoreCount >= 10) {
            comprou50Desconto.innerText = "Comprado!"
            comprou50DescontoBool1Click = true;
            comprou50DescontoBool3Clicks = true;
            valor1Click.innerHTML = Math.floor(valorControlador1Click/2);
            valor3Clicks.innerHTML = Math.floor(valorControlador3Clicks/2);
            scoreCounPrincipal.innerHTML = scoreCount - 10;
            scoreCount -= 10;
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
const dobrouQtdClicksMelhoriaNumeroAuto = document.getElementById("dobrouQtdClicksMelhoriaNumeroAuto");
let dobrouQtdClicksMelhoriaClicks = false;
let dobrouQtdClicksMelhoriaClicksBlock = false;

function dobraQtdClicksMelhoriaClicks() {
    if(dobrouQtdClicksMelhoriaClicksBlock != true){
        if(scoreCount >= 50) {
            scoreCounPrincipal.innerHTML = scoreCount - 50;
            scoreCount -= 50;
            dobrouQtdClicksMelhoriaClicks = true;
            comprouDobraQtdClicksMelhoriaClicks.innerText = "Comprado!";
            dobrouQtdClicksMelhoriaClicksBlock = true;
            dobrouQtdClicksMelhoriaNumero1.innerHTML = "2";
            dobrouQtdClicksMelhoriaNumero3.innerHTML = "6";
            dobrouQtdClicksMelhoriaNumeroAuto.innerHTML = "2";
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

function validarConquistasClisk() {
    if(conquistaContadorClicks <= 10) {
        conquista10.innerHTML = conquistaContadorClicks;
        if (conquistaContadorClicks == 10) {     
            toast_body.innerText = "Clicador Aprendiz | 10 Cliques";         
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
        } 
    } 
    if(conquistaContadorClicks <= 1000){
        conquistaMil.innerHTML = conquistaContadorClicks;
        if (conquistaContadorClicks == 1000) {     
            toast_body.innerText = "Clicador Junior | 1000 Cliques";         
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
        } 
    }
    if(conquistaContadorClicks <= 5000){
        conquista5Mil.innerHTML = conquistaContadorClicks;
        if (conquistaContadorClicks == 5000) {     
            toast_body.innerText = "Clicador Pleno | 5000 Cliques";         
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
        } 
    }
    if(conquistaContadorClicks <= 10000){
        conquista10Mil.innerHTML = conquistaContadorClicks;
        if (conquistaContadorClicks == 10000) {     
            toast_body.innerText = "Clicador Senior | 10000 Cliques";         
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
        } 
    }
    if(conquistaContadorClicks <= 50000){
        conquista50Mil.innerHTML = conquistaContadorClicks;
        if (conquistaContadorClicks == 50000) {     
            toast_body.innerText = "Mega Clicador | 50000 Cliques";         
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
        } 
    }
    if(conquistaContadorClicks <= 100000){
        conquista100Mil.innerHTML = conquistaContadorClicks;
        if (conquistaContadorClicks == 100000) {     
            toast_body.innerText = "Ultra Master Clicador | 100000 Cliques";         
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
        } 
    }
    if(conquistaContadorClicks <= 500000){
        conquista500Mil.innerHTML = conquistaContadorClicks;
        if (conquistaContadorClicks == 500000) {     
            toast_body.innerText = "Você Realmente é um Clicador | 500000 Cliques";         
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
        } 
    }
    
}


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
