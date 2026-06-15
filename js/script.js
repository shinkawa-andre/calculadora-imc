

const height = document.getElementById('height');
const weight = document.getElementById('weight');
const btn = document.getElementById('btn');
const containerResult = document.getElementById('container-resultado');


btn.addEventListener('click', (e) => {
    e.preventDefault();

    const h = parseFloat(height.value);
    const w = parseFloat(weight.value);

    const result = w / (h * h);
    console.log(result);

    const dataAtual = new Date();
    const agora = new Date();
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR');
    const dataHora = agora.toLocaleString('pt-BR');



    if (result < 18.5) {
        containerResult.style.display = 'flex';
        containerResult.innerHTML = `
            <div class="resultado-baixo">
                <h2>Abaixo do Normal</h2>
                <p>O resultado é: <span>${result.toFixed(2)}</span> </p>
                <p id="data-calculo">${dataHora}</p>
            </div>
        `
    } else if (result >= 18.5 && result <= 24.9) {
        containerResult.style.display = 'flex';
        containerResult.innerHTML = `
            <div class="resultado-normal">
                <h2>Normal</h2>
                <p>O resultado é: <span>${result.toFixed(2)}</span> </p>
                <p id="data-calculo">${dataHora}</p>
            </div>
        `
    } else if (result >= 25 && result <= 29.9) {
        containerResult.style.display = 'flex';
        containerResult.innerHTML = `
            <div class="resultado-sobrepeso">
                <h2>Sobrepeso</h2>
                <p>O resultado é: <span>${result.toFixed(2)}</span> </p>
                <p id="data-calculo"${dataHora}</p>
            </div>
        `
    } else if (result >= 30 && result <= 39.9) {
        containerResult.style.display = 'flex';
        containerResult.innerHTML = `
            <div class="resultado-obesidade">
                <h2>Obesidade</h2>
                <p>O resultado é: <span>${result.toFixed(2)}</span> </p>
                <p id="data-calculo">${dataHora}</p>
            </div>
        `
    } else if (result >= 40) {
        containerResult.style.display = 'flex';
        containerResult.innerHTML = `
            <div class="resultado-obesidade-grave">
                <h2>Obesidade Grave</h2>
                <p>O resultado é: <span>${result.toFixed(2)}</span> </p>
                <p id="data-calculo">${dataHora}</p>
            </div>
        `
    }




});