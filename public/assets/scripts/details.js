const apiUrl = 'http://localhost:3000/flores';
const container = document.getElementById('details-content');
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function fetchItemDetails() {
    if (!id) {
        container.innerHTML = '<p class="error-msg">Nenhum produto selecionado.</p>';
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/${id}`);
        if (!response.ok) throw new Error('Produto não encontrado');
        const item = await response.json();
        renderDetails(item);
    } catch (error) {
        container.innerHTML = `<p class="error-msg">${error.message}</p>`;
    }
}

function renderDetails(item) {
    const tagsHtml = item.tags.map(tag => `<span class="tag-chip">${tag}</span>`).join('');
    container.innerHTML = `
        <div class="details-container">
            <img src="${item.imagem}" alt="${item.nome}" class="details-img">
            <div class="details-info">
                <span class="categoria">${item.categoria}</span>
                <h2>${item.nome}</h2>
                <p class="preco">R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
                <p><strong>Descrição:</strong> ${item.descricaoCompleta}</p>
                <div class="tags">${tagsHtml}</div>
            </div>
        </div>
    `;
}

fetchItemDetails();