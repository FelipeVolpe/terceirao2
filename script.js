function irPara(pagina) {
    window.location.href = pagina;
}

function voltar() {
    window.location.href = "index.html";
}
function criaCard() {
    var card = `<section class="cards-container">
    <div class="card">
        <h3>Título do Card 1</h3>
        <div class="card-content">
            <p>Aqui vai o conteúdo do card. Pode ter várias linhas e o card vai se ajustar automaticamente.</p>
            <p>Mais informações podem ser adicionadas em novos parágrafos.</p>
        </div>
    </div>

    <div class="card">
        <h3>Título do Card 2</h3>
        <div class="card-content">
            <p>Conteúdo mais curto.</p>
        </div>
    </div>

    <div class="card">
        <h3>Título do Card 3</h3>
        <div class="card-content">
            <p>Card com lista:</p>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    </div>
</section>`
}