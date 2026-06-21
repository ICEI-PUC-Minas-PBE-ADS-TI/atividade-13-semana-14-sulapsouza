
# Trabalho Prático - Semana 14

A partir dos dados disponíveis em seu projeto, vamos explorar formas de visualização que permitam apresentar essas informações de maneira clara, interativa e significativa. Você poderá utilizar gráficos (barras, linhas, pizza), mapas, calendários ou outras formas de visualização. Seu desafio é desenvolver uma página Web capaz de organizar, processar e exibir os dados de forma compreensível e visualmente atraente.

Com base no tipo de projeto escolhido, você deverá propor **visualizações que estimulem a interpretação, o agrupamento e a apresentação criativa dos dados**, trabalhando tanto os aspectos lógicos quanto os visuais da aplicação.

Sugerimos o uso das seguintes ferramentas acessíveis: [FullCalendar](https://fullcalendar.io/), [Chart.js](https://www.chartjs.org/), [Mapbox](https://docs.mapbox.com/api/), para citar algumas.

## Informações Gerais

- Nome: Sulamita Pinheiro de Souza
- Matrícula: 927424
- Proposta de projeto escolhida: O projeto "Floricultura Encanto" é um catálogo digital interativo alimentado por uma API local. A aplicação exibe os produtos dinamicamente e conta com um Dashboard integrado feito com a biblioteca Chart.js. Esse painel apresenta um gráfico reativo que ilustra a distribuição dos produtos por categoria, atualizando-se em tempo real conforme os dados sofrem alterações.

**Print da tela com a implementação**

<< Coloque aqui uma breve explicação da implementação feita nesta etapa >>

Nesta etapa, foi adicionada uma página de Dashboard (dashboard.html) para a apresentação visual e avançada dos dados da aplicação. Utilizamos a Fetch API assíncrona do JavaScript para buscar os dados dos produtos diretamente do nosso backend simulado (JSON Server). A partir dessa requisição, desenvolvemos um algoritmo para agrupar e contabilizar o número de itens existentes em cada categoria da floricultura. Por fim, integramos a biblioteca externa Chart.js para renderizar um gráfico de pizza (pie chart) interativo e responsivo. O gráfico é alimentado dinamicamente, o que significa que qualquer adição, exclusão ou alteração nos itens do arquivo db.json reflete instantaneamente na interface visual, permitindo uma análise clara da distribuição do catálogo.

<<  COLOQUE A IMAGEM DA TELA 1 AQUI >>
![Imagem 1 do Dashboard](/images/grafico1.png)
<<  COLOQUE A IMAGEM DA TELA 2 AQUI >>
![Imagem 1 do Dashboard](/images/grafico2.png)

