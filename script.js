const button = document.getElementById("myButton");
let comprou50DescontoBool1click;
let comprou50DescontoBool5Clicks;
let comprou50DescontoBool3Clicks;
let comprou50DescontoBool20Clicks;
let comprou50DescontoBool3ClickAuto;
let comprou50DescontoBool5ClicksAuto;

if (button) {
    button.addEventListener("click", function () {
        button.classList.add("pulse");
        setTimeout(function () {
            button.classList.remove("pulse");
        }, 100);
    });
}

let scoreCount = 0;

let addCountScore = 1;

let conquistaContadorClicks = 0;

function buttonSomar() {
    if (dobrouQtdClicks) {
        addCountScore *= 2;
        scoreCount = (scoreCount - 200) + addCountScore;
        dobrouQtdClicks = false;
        scoreCounPrincipal.innerHTML = scoreCount;
        conquistaContadorClicks++;
        validarConquistasClisk(conquistaContadorClicks);
    } else {
        scoreCount += addCountScore;
        scoreCounPrincipal.innerHTML = scoreCount;
        conquistaContadorClicks++;
        validarConquistasClisk(conquistaContadorClicks);
    }
};

const scoreCounPrincipal = document.getElementById("scoreCount");
const CountPorClick = document.getElementById("cadaClick");

let valorControlador1Click = 10;

const valor1Click = document.getElementById("valor1Click");
const countComprado1Click = document.getElementById("countComprado1Click");
let contadorCountComprado1Click = 0;
let valorControlador1Click50Desconto = 0;
let mais1ClickApos50Desconto = false;

function mais1Click() {
    let valorAdicionado1Clicks = 1;
    if (dobrouQtdClicksMelhoriaClicks) {
        valorAdicionado1Clicks = 2;
    }

    if (comprou50DescontoBool1click) {
        valorControlador1Click50Desconto = Math.floor(valorControlador1Click / 2);
        if (scoreCount >= valorControlador1Click50Desconto) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador1Click50Desconto;
            scoreCount -= valorControlador1Click50Desconto;
            arredondandoValor = Math.floor(valorControlador1Click50Desconto * 1.2);
            valor1Click.innerHTML = arredondandoValor;
            valorControlador1Click50Desconto = arredondandoValor;
            comprou50DescontoBool1click = false;
            mais1ClickApos50Desconto = true;
            addCountScore += valorAdicionado1Clicks;
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado1Click++;
            countComprado1Click.innerHTML = contadorCountComprado1Click;
        }
    } else if (mais1ClickApos50Desconto) {
        if (scoreCount >= valorControlador1Click50Desconto) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador1Click50Desconto;
            scoreCount -= valorControlador1Click50Desconto;
            arredondandoValor = Math.floor(valorControlador1Click50Desconto * 1.2);
            valor1Click.innerHTML = arredondandoValor;
            valorControlador1Click50Desconto = arredondandoValor;
            addCountScore += valorAdicionado1Clicks;
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado1Click++;
            countComprado1Click.innerHTML = contadorCountComprado1Click;
        }
    } else {
        if (scoreCount >= valorControlador1Click) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador1Click;
            scoreCount -= valorControlador1Click;
            arredondandoValor = Math.floor(valorControlador1Click * 1.2);
            valor1Click.innerHTML = arredondandoValor;
            valorControlador1Click = arredondandoValor;
            addCountScore += valorAdicionado1Clicks;
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado1Click++;
            countComprado1Click.innerHTML = contadorCountComprado1Click;
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
    if (dobrouQtdClicksMelhoriaClicks) {
        valorAdicionadoClicks = 10;
    }
    if (comprou50DescontoBool5Clicks) {
        valorControlador5Clicks50Desconto = Math.floor(valorControlador5Clicks / 2);
        if (scoreCount >= valorControlador5Clicks50Desconto) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador5Clicks50Desconto;
            scoreCount -= valorControlador5Clicks50Desconto;
            let arredondandoValor = Math.floor(valorControlador5Clicks50Desconto * 1.2);
            valor5Clicks.innerHTML = arredondandoValor;
            valorControlador5Clicks50Desconto = arredondandoValor;
            comprou50DescontoBool5Clicks = false;
            mais5ClicksApos50Desconto = true;
            addCountScore += valorAdicionadoClicks;
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado5Clicks++;
            countComprado5Clicks.innerHTML = contadorCountComprado5Clicks;
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
        }
    } else {
        if (scoreCount >= valorControlador5Clicks) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador5Clicks;
            scoreCount -= valorControlador5Clicks;
            let arredondandoValor = Math.floor(valorControlador5Clicks * 1.2);
            valor5Clicks.innerHTML = arredondandoValor;
            valorControlador5Clicks = arredondandoValor;
            addCountScore += valorAdicionadoClicks;
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado5Clicks++;
            countComprado5Clicks.innerHTML = contadorCountComprado5Clicks;
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
    if (dobrouQtdClicksMelhoriaClicks) {
        valorAdicionadoClicks = 6;
    }
    if (comprou50DescontoBool3Clicks) {
        valorControlador3Clicks50Desconto = Math.floor(valorControlador3Clicks / 2);
        if (scoreCount >= valorControlador3Clicks50Desconto) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador3Clicks50Desconto;
            scoreCount -= valorControlador3Clicks50Desconto;
            let arredondandoValor = Math.floor(valorControlador3Clicks50Desconto * 1.2);
            valor3Clicks.innerHTML = arredondandoValor;
            valorControlador3Clicks50Desconto = arredondandoValor;
            comprou50DescontoBool3Clicks = false;
            mais3ClicksApos50Desconto = true;
            addCountScore += valorAdicionadoClicks;
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado3Clicks++;
            countComprado3Clicks.innerHTML = contadorCountComprado3Clicks;
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
        }
    } else {
        if (scoreCount >= valorControlador3Clicks) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador3Clicks;
            scoreCount -= valorControlador3Clicks;
            let arredondandoValor = Math.floor(valorControlador3Clicks * 1.2);
            valor3Clicks.innerHTML = arredondandoValor;
            valorControlador3Clicks = arredondandoValor;
            addCountScore += valorAdicionadoClicks;
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado3Clicks++;
            countComprado3Clicks.innerHTML = contadorCountComprado3Clicks;
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
    if (dobrouQtdClicksMelhoriaClicks) {
        valorAdicionadoClicks = 40;
    }
    if (comprou50DescontoBool20Clicks) {
        valorControlador20Clicks50Desconto = Math.floor(valorControlador20Clicks / 2);
        if (scoreCount >= valorControlador20Clicks50Desconto) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador20Clicks50Desconto;
            scoreCount -= valorControlador20Clicks50Desconto;
            let arredondandoValor = Math.floor(valorControlador20Clicks50Desconto * 1.2);
            valor20Clicks.innerHTML = arredondandoValor;
            valorControlador20Clicks50Desconto = arredondandoValor;
            comprou50DescontoBool20Clicks = false;
            mais20ClicksApos50Desconto = true;
            addCountScore += valorAdicionadoClicks;
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado20Clicks++;
            countComprado20Clicks.innerHTML = contadorCountComprado20Clicks;
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
        }
    } else {
        if (scoreCount >= valorControlador20Clicks) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControlador20Clicks;
            scoreCount -= valorControlador20Clicks;
            let arredondandoValor = Math.floor(valorControlador20Clicks * 1.2);
            valor20Clicks.innerHTML = arredondandoValor;
            valorControlador20Clicks = arredondandoValor;
            addCountScore += valorAdicionadoClicks;
            CountPorClick.innerHTML = addCountScore;
            contadorCountComprado20Clicks++;
            countComprado20Clicks.innerHTML = contadorCountComprado20Clicks;
        }
    }
}

const valorAutoClick = document.getElementById("valorAutoClick");
const countCompradoAutoClick = document.getElementById("countCompradoAutoClick");
let valorControladorAutoClick = 100;
let contadorCountCompradoAutoClick = 0;
let valorControladorAutoClick50Desconto = 0;
let autoClickApos50Desconto = false;

function mais3ClickAuto() {
    let valorAdicionadoClicks = 3;
    if (dobrouQtdClicksMelhoriaClicks) {
        valorAdicionadoClicks = 6;
    }

    if (comprou50DescontoBool3ClickAuto) {
        valorControladorAutoClick50Desconto = Math.floor(valorControladorAutoClick / 2);
        if (scoreCount >= valorControladorAutoClick50Desconto) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControladorAutoClick50Desconto;
            scoreCount -= valorControladorAutoClick50Desconto;
            let arredondandoValor = Math.floor(valorControladorAutoClick50Desconto * 1.2);
            valorAutoClick.innerHTML = arredondandoValor;
            valorControladorAutoClick50Desconto = arredondandoValor;
            comprou50DescontoBool3ClickAuto = false;
            autoClickApos50Desconto = true;
            contadorCountCompradoAutoClick++;
            countCompradoAutoClick.innerHTML = contadorCountCompradoAutoClick;
            setInterval(function () {
                scoreCounPrincipal.innerHTML = scoreCount += valorAdicionadoClicks;
            }, 1000);
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
            setInterval(function () {
                scoreCounPrincipal.innerHTML = scoreCount += valorAdicionadoClicks;
            }, 1000);
        }
    } else {
        if (scoreCount >= valorControladorAutoClick) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControladorAutoClick;
            scoreCount -= valorControladorAutoClick;
            let arredondandoValor = Math.floor(valorControladorAutoClick * 1.2);
            valorAutoClick.innerHTML = arredondandoValor;
            valorControladorAutoClick = arredondandoValor;
            contadorCountCompradoAutoClick++;
            countCompradoAutoClick.innerHTML = contadorCountCompradoAutoClick;
            setInterval(function () {
                scoreCounPrincipal.innerHTML = scoreCount += valorAdicionadoClicks;
            }, 1000);
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
    if (dobrouQtdClicksMelhoriaClicks) {
        valorAdicionadoClicks = 10;
    }

    if (comprou50DescontoBool5ClicksAuto) {
        valorControladorAutoClick50Desconto5 = Math.floor(valorControladorAutoClick5 / 2);
        if (scoreCount >= valorControladorAutoClick50Desconto5) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControladorAutoClick50Desconto5;
            scoreCount -= valorControladorAutoClick50Desconto5;
            let arredondandoValor = Math.floor(valorControladorAutoClick50Desconto5 * 1.2);
            valorAutoClick5.innerHTML = arredondandoValor;
            valorControladorAutoClick50Desconto5 = arredondandoValor;
            comprou50DescontoBool5ClicksAuto = false;
            autoClicks5Apos50Desconto = true;
            contadorCountCompradoAutoClick5++;
            countCompradoAutoClick5.innerHTML = contadorCountCompradoAutoClick5;
            setInterval(function () {
                scoreCounPrincipal.innerHTML = scoreCount += valorAdicionadoClicks;
            }, 1000);
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
            setInterval(function () {
                scoreCounPrincipal.innerHTML = scoreCount += valorAdicionadoClicks;
            }, 1000);
        }
    } else {
        if (scoreCount >= valorControladorAutoClick5) {
            scoreCounPrincipal.innerHTML = scoreCount - valorControladorAutoClick5;
            scoreCount -= valorControladorAutoClick5;
            let arredondandoValor = Math.floor(valorControladorAutoClick5 * 1.2);
            valorAutoClick5.innerHTML = arredondandoValor;
            valorControladorAutoClick5 = arredondandoValor;
            contadorCountCompradoAutoClick5++;
            countCompradoAutoClick5.innerHTML = contadorCountCompradoAutoClick5;
            setInterval(function () {
                scoreCounPrincipal.innerHTML = scoreCount += valorAdicionadoClicks;
            }, 1000);
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
    if (!comprou50DescontoBool) {
        if (scoreCount >= 75000) {
            comprou50Desconto.innerText = "Comprado!"
            comprou50DescontoBool1click = true;
            comprou50DescontoBool5Clicks = true;
            comprou50DescontoBool3Clicks = true;
            comprou50DescontoBool20Clicks = true;
            comprou50DescontoBool3ClickAuto = true;
            comprou50DescontoBool5ClicksAuto = true;
            valor1Click.innerHTML = Math.floor(valorControlador1Click / 2);
            valor3Clicks.innerHTML = Math.floor(valorControlador3Clicks / 2);
            valorAutoClick.innerHTML = Math.floor(valorControladorAutoClick / 2);

            if (desbloqueou5clicks) {
                valor5Clicks.innerHTML = Math.floor(valorControlador5Clicks / 2);
            }

            if (desbloqueou20clicks) {
                valor20Clicks.innerHTML = Math.floor(valorControlador20Clicks / 2);
            }

            if (desbloqueou5clicksAuto) {
                valorAutoClick5.innerHTML = Math.floor(valorControladorAutoClick5 / 2);
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
    if (comprouDobraQtdClicksBlock != true) {
        if (scoreCount >= 200000) {
            scoreCounPrincipal.innerHTML = scoreCount - 200000;
            dobrouQtdClicks = true;
            CountPorClick.innerHTML = addCountScore * 2;
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
    if (dobrouQtdClicksMelhoriaClicksBlock != true) {
        if (scoreCount >= 500000) {
            scoreCounPrincipal.innerHTML = scoreCount - 500000;
            scoreCount -= 500000;
            dobrouQtdClicksMelhoriaClicks = true;
            comprouDobraQtdClicksMelhoriaClicks.innerText = "Comprado!";
            dobrouQtdClicksMelhoriaClicksBlock = true;
            dobrouQtdClicksMelhoriaNumero1.innerHTML = "2";
            dobrouQtdClicksMelhoriaNumero3.innerHTML = "6";
            dobrouQtdClicksMelhoriaNumeroAuto.innerHTML = "6";

            if (desbloqueou5clicks) {
                dobrouQtdClicksMelhoriaNumero5.innerHTML = "10";
            }

            if (desbloqueou20clicks) {
                dobrouQtdClicksMelhoriaNumero20.innerHTML = "40";
            }

            if (desbloqueou5clicksAuto) {
                dobrouQtdClicksMelhoriaNumeroAuto5.innerHTML = "10";
            }
        } else {
            alert("Ainda não há cliques suficientes!");
        }
    } else {
        alert("Você já comprou esse item!");
    }
}