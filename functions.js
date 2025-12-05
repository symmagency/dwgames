// Adiciona a seção de comparação de preços após .home .collection-6

// Definição das variáveis para permitir personalização fácil
const leftImageUrl = 'super-mario-bros-wonder.jpg';
const rightImageUrl = 'mortal-kombat-1.jpg';
const prices = [
  { value: 'R$ 49,00', link: '/comprar/49' },
  { value: 'R$ 79,00', link: '/comprar/79' },
  { value: 'R$ 99,00', link: '/comprar/99' },
  { value: 'R$ 129,00', link: '/comprar/129' },
  { value: 'R$ 159,00', link: '/comprar/159' },
  { value: 'R$ 199,00', link: '/comprar/199' },
];

function PriceComparisonSection() {
  return `
    <div class="comparison-container">
      <div class="img-left">
        <img src="${leftImageUrl}" alt="Super Mario Bros Wonder">
      </div>
      <div class="center-content">
        <h3>Compare jogos por faixa de preço</h3>
        <span>Escolha o valor e veja os jogos nesta faixa</span>
        <ul>
          ${prices
            .map(
              price =>
                `<li>
                  <a href="${price.link}">${price.value}</a>
                </li>`
            )
            .join('')}
        </ul>
      </div>
      <div class="img-right">
        <img src="${rightImageUrl}" alt="Mortal Kombat 1">
      </div>
    </div>
  `;
}

// Insere a seção de comparação de preços após .home .collection-6 usando jQuery
function insertPriceComparisonAfterCollection6() {
  var $collection6 = $('.home .collection-6');
  if ($collection6.length) {
    var $comparisonSection = $(PriceComparisonSection());
    $collection6.after($comparisonSection);
  }
}

// Executa assim que o DOM estiver pronto usando jQuery
$(document).ready(function() {
  insertPriceComparisonAfterCollection6();
});

