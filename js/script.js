
// Calcula e mostra na tela
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const btn = document.getElementById('btn');
const containerResult = document.getElementById('container-resultado');
const tabela = document.getElementById("tabela-imc");


function carregarHistorico() {
    const historico = JSON.parse(localStorage.getItem('historicoIMC')) || [];

    tabela.innerHTML = '';

    historico.forEach((item, index) => {
        tabela.innerHTML += `
            <tr>
                <td>${item.data}</td>
                <td>${item.peso} kg</td>
                <td>${item.altura} m</td>
                <td>${item.imc}</td>
                <th><a class="excluir" onclick="excluirItem(${index})"><i class="fa-solid fa-trash"></i></a></th>
            </tr>
        `;
    });
}


function excluirItem(index) {
    const historico =
        JSON.parse(localStorage.getItem("historicoIMC")) || [];

    historico.splice(index, 1);

    localStorage.setItem(
        "historicoIMC",
        JSON.stringify(historico)
    );

    carregarHistorico();
}



btn.addEventListener('click', (e) => {
    e.preventDefault();

    const altura = parseFloat(height.value);
    const peso = parseFloat(weight.value);

    const result = peso / (altura * altura);
    console.log(result);

    const dataAtual = new Date();
    const agora = new Date();
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR');
    const dataHora = agora.toLocaleString('pt-BR');



    const historico =
        JSON.parse(localStorage.getItem("historicoIMC")) || [];

    historico.push({
        data: dataHora,
        peso: peso,
        altura: altura,
        imc: result.toFixed(2)
    });





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
                <p id="data-calculo">${dataHora}</p>
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


    localStorage.setItem("historicoIMC", JSON.stringify(historico));
    carregarHistorico();


});
carregarHistorico();

//Modal

const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener('click', () => {
    modal.style.display = "flex";
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
})




const salvarCores = document.getElementById("salvar-cores");
const container = document.getElementById("container");
const cardImc = document.querySelector(".imc");
const btnImc = document.getElementById("btn");

salvarCores.addEventListener('click', (e) => {
    e.preventDefault();


    const fundoPrincipal = document.getElementById("fundo-principal").value;
    container.style.backgroundColor = fundoPrincipal;

    const fundoCard = document.getElementById("fundo-card").value;
    cardImc.style.backgroundColor = fundoCard;

    const fundoBotao = document.getElementById("fundo-botao").value;
    btnImc.style.backgroundColor = fundoBotao;


    localStorage.setItem("cores", JSON.stringify({
        container: fundoPrincipal,
        cardImc: fundoCard,
        btnImc: fundoBotao
    }));
})

const coresSalvas = JSON.parse(localStorage.getItem("cores"));

if (coresSalvas) {
    container.style.backgroundColor = coresSalvas.container;
    cardImc.style.backgroundColor = coresSalvas.cardImc;
    btnImc.style.backgroundColor = coresSalvas.btnImc;
}


const btnPadrao = document.getElementById("padrao");
btnPadrao.addEventListener("click", () => {

    const corContainer = "#fff";
    const corCard = "#6C7A89";
    const corBtn = "#333";

    container.style.backgroundColor = corContainer;
    cardImc.style.backgroundColor = corCard;
    btn.style.backgroundColor = corBtn

    localStorage.setItem("cores", JSON.stringify({
        container: corContainer,
        cardImc: corCard,
        btnImc: corBtn
    }));
});


//fim modal


