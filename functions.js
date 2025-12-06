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

// Variáveis configuráveis
const ctRumbleImageDesktopUrl = 'https://path.to.image/crash-team-rumble-desktop.jpg'; // Substitua pelo URL da imagem para desktop
const ctRumbleImageMobileUrl = 'https://path.to.image/crash-team-rumble-mobile.jpg'; // Substitua pelo URL da imagem para mobile
const ctRumblePrice = 'R$ 299,99';
const ctRumbleLink = '/comprar/crash-team-rumble';

// Gera o HTML do card com imagem para desktop e mobile
function CrashTeamRumbleCard() {
  return `
    <a href="${ctRumbleLink}" class="ctrumble-card-link">
      <div class="ctrumble-card">
        <picture>
          <source media="(max-width: 767px)" srcset="${ctRumbleImageMobileUrl}">
          <source media="(min-width: 768px)" srcset="${ctRumbleImageDesktopUrl}">
          <img src="${ctRumbleImageDesktopUrl}" alt="Crash Team Rumble">
        </picture>
        <div>
          <div>
            <div>
              ${ctRumblePrice} <span>no pix</span>
            </div>
          </div>
          <div>
            <span>
              Comprar agora <span>↗</span>
            </span>
          </div>
        </div>
      </div>
    </a>
  `;
}

// Exemplo de inserção do card na página usando jQuery
// Altere o seletor conforme o local desejado
function insertCrashTeamRumbleCard() {
  // Exemplo: insere no início do body
  $('.home .video .yt-video').append(CrashTeamRumbleCard());
}

// Chama a função ao carregar o DOM
$(document).ready(function() {
  insertCrashTeamRumbleCard();
});
