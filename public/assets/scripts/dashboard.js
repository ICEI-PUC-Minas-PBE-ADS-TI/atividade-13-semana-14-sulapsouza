const apiUrl = 'http://localhost:3000/flores';

async function carregarGrafico() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Erro');
        const flores = await response.json();

        const contagem = {};
        flores.forEach(flor => {
            if (contagem[flor.categoria]) {
                contagem[flor.categoria]++;
            } else {
                contagem[flor.categoria] = 1;
            }
        });

        const labels = Object.keys(contagem);
        const data = Object.values(contagem);

        renderizarGrafico(labels, data);

    } catch (error) {
        console.error(error);
    }
}

function renderizarGrafico(labels, data) {
    const ctx = document.getElementById('meuGrafico').getContext('2d');
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quantidade de Produtos',
                data: data,
                backgroundColor: [
                    '#4CAF50',
                    '#E91E63',
                    '#2196F3',
                    '#FF9800'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

carregarGrafico();