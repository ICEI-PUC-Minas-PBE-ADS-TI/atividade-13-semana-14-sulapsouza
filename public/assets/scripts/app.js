const apiUrl = 'http://localhost:3000/flores';

async function fetchItems() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Erro');
        return await response.json();
    } catch (error) {
        document.getElementById('cards-container').innerHTML = '<p class="error-msg">Erro ao carregar as flores.</p>';
        return [];
    }
}

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${item.imagem}" alt="${item.nome}">
        <div class="card-content">
            <span class="categoria">${item.categoria}</span>
            <h3>${item.nome}</h3>
            <p>${item.descricaoCurta}</p>
            <p class="preco">R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
            <a href="details.html?id=${item.id}" class="btn">Ver detalhes</a>
        </div>
    `;
    return card;
}

function renderCards(items) {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';
    items.forEach(item => {
        container.appendChild(createCard(item));
    });
}

async function init() {
    const items = await fetchItems();
    if (items.length > 0) {
        renderCards(items);
    }
}

init();