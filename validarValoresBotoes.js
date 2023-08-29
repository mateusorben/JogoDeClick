setInterval(function() {
    const scoreCount = localStorage.getItem('scoreCount');
    
    const valor1Click = localStorage.getItem('valor1Click');
    const valor5Clicks = localStorage.getItem('valor5Clicks');
    const valor3Clicks = localStorage.getItem('valor3Clicks');
    const valor20Clicks = localStorage.getItem('valor20Clicks');
    const valor3ClicksAuto = localStorage.getItem('valor3ClicksAuto');
    const valor5ClicksAuto = localStorage.getItem('valor5ClicksAuto');

    let scoreCoutnNumber = parseInt(scoreCount);
    let valor1ClickNumber = parseInt(valor1Click);
    let valor5ClicksNumber = parseInt(valor5Clicks);
    let valor3ClicksNumber = parseInt(valor3Clicks);
    let valor20ClicksNumber = parseInt(valor20Clicks);
    let valor3ClicksAutoNumber = parseInt(valor3ClicksAuto);
    let valor5ClicksAutoNumber = parseInt(valor5ClicksAuto);

    const btn1Click = document.getElementById('btn1Click');
    const btn3Clicks = document.getElementById('btn3Clicks');
    const btn3ClickAuto = document.getElementById('btn3ClickAuto');
    const btnMais5Clicks = document.getElementById('btnMais5Clicks');
    const btnMais20Clicks = document.getElementById('btnMais20Clicks');
    const btnMais5ClicksAuto = document.getElementById('btnMais5ClicksAuto');

    if (valor1ClickNumber > scoreCoutnNumber) {
        btn1Click.style.color = 'red';
    } else {
        btn1Click.removeAttribute('style');
    }

    if (valor5ClicksNumber > scoreCoutnNumber) {
        btnMais5Clicks.style.color = 'red';
    } else {
        btnMais5Clicks.removeAttribute('style');
    }

    if (valor3ClicksNumber > scoreCoutnNumber) {
        btn3Clicks.style.color = 'red';
    } else {
        btn3Clicks.removeAttribute('style');
    }

    if (valor20ClicksNumber > scoreCoutnNumber) {
        btnMais20Clicks.style.color = 'red';
    } else {
        btnMais20Clicks.removeAttribute('style');
    }

    if (valor3ClicksAutoNumber > scoreCoutnNumber) {
        btn3ClickAuto.style.color = 'red';
    } else {
        btn3ClickAuto.removeAttribute('style');
    }

    if (valor5ClicksAutoNumber > scoreCoutnNumber) {
        btnMais5ClicksAuto.style.color = 'red';
    } else {
        btnMais5ClicksAuto.removeAttribute('style');
    }
}, 100);