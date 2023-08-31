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

function validarConquistasClisk(conquistaContadorClicks) {
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
            nivel_jogador_navbar.innerText = 'Mega Clicador';
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