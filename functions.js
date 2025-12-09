$(window).on('load', function () {

    // Move o banner 2 para dentro do holder-main-banner
    var $target = $('.main-banner .holder-main-banner');
    var $elementToMove = $('section.banner-2.banner_2-3');
    if ($target.length && $elementToMove.length) {
      $target.append($elementToMove);
    }
  
    // Adiciona classe de inicialização
    $('html').addClass('js-initialized');
  
    // --- Funções Auxiliares ---
    function inserirSymmFooter() {
      var $footerSection = $('.holder-footer-section.section-3');
  
      if ($footerSection.length && !$footerSection.find('.holder-symm').length) {
        var $newContent = $('<div>', {
          'class': 'holder-symm flex',
          html: '' +
            '<span>Desenvolvimento</span> ' +
            '<a href="https://symmagency.webflow.io/" target="_blank" rel="noreferrer nofollow" class="yampi">' +
            '  <img src="https://cdn.awsli.com.br/2775/2775575/arquivos/symm.svg" alt="Symm - Agência de Design" width="110" height="24" class="h-va-middle h-inline-block h-ml10 loaded">' +
            '</a>'
        });
  
        $footerSection.append($newContent);
        return true;
      }
      return false;
    }
  
    // --- Criação da Seção de Categorias em Destaque ---
    function criarCategoriesHighlight() {
      // Array com os dados dos jogos (imagens)
      var games = [
        {
          name: 'Call of Duty',
          image: 'https://symmagency.github.io/dwgames/assets/gamescat/cod.png',
          alt: 'Call of Duty'
        },
        {
          name: 'God of War',
          image: 'https://symmagency.github.io/dwgames/assets/gamescat/gow.png',
          alt: 'God of War'
        },
        {
          name: 'FC 25',
          image: 'https://symmagency.github.io/dwgames/assets/gamescat/fc.png',
          alt: 'FC 25'
        },
        {
          name: 'Forza',
          image: 'https://symmagency.github.io/dwgames/assets/gamescat/forza.png',
          alt: 'Forza'
        },
        {
          name: 'Grand Theft Auto',
          image: 'https://symmagency.github.io/dwgames/assets/gamescat/gta.png',
          alt: 'Grand Theft Auto'
        },
        {
          name: 'UFC',
          image: 'https://symmagency.github.io/dwgames/assets/gamescat/ufc.png',
          alt: 'UFC'
        },
        {
          name: 'Formula 1',
          image: 'https://symmagency.github.io/dwgames/assets/gamescat/fone.png',
          alt: 'Formula 1'
        }
      ];
  
      // Encontra o elemento .categories_highlight existente
      var $existingHighlight = $('.categories_highlight');
  
      if ($existingHighlight.length) {
        // Cria o novo container
        var $container = $('<div>', { 'class': 'container' });
  
        // Cria a seção de categorias
        var $categoriesSection = $('<div>', { 'class': 'categories-highlight' });
  
        // Cria os cards dos jogos
        $.each(games, function (index, game) {
          var $gameCard = $('<div>', { 'class': 'game-card' });
          var $gameImage = $('<img>', {
            src: game.image,
            alt: game.alt
          });
  
          $gameCard.append($gameImage);
          $categoriesSection.append($gameCard);
        });
  
        $container.append($categoriesSection);
  
        // Substitui o conteúdo existente
        $existingHighlight.empty().append($container);
      }
    }
  
    // --- Organização dos Banners ---
    requestAnimationFrame(function () {
      var $banner1 = $('.home .banner-1.banner_1-2');
      var $mainBanner = $('.home .main-banner');
  
      if ($banner1.length && $mainBanner.length) {
        $banner1.insertBefore($mainBanner);
      }
    });
  
    // --- Inserção do Footer Symm ---
    if (!inserirSymmFooter()) {
      var observer = new MutationObserver(function () {
        if (inserirSymmFooter()) {
          observer.disconnect();
        }
      });
  
      observer.observe(document.body, { childList: true, subtree: true });
    }
  
    // --- Movimentação de Containers de Especificações (apenas desktop > 701px) ---
    if ($(window).width() > 701) {
      requestAnimationFrame(function () {
        var $containers = $('.product-specifications .container');
        var $containerToMove = $containers.eq(1); // segundo container
        var $containerToMoveFirst = $containers.eq(0); // primeiro container
        var $targetInfo = $('.main-product-content .main-product-info');
        var $mainProductImages = $('.main-product-images');
  
        // Move o segundo container para dentro de .main-product-info
        if ($containerToMove.length && $targetInfo.length) {
          $targetInfo.append($containerToMove);
        }
  
        // Move o primeiro container para dentro de .main-product-images
        if ($containerToMoveFirst.length && $mainProductImages.length) {
          $mainProductImages.append($containerToMoveFirst);
        }
      });
    }
  
    // --- Execução da criação das categorias ---
    requestAnimationFrame(function () {
      criarCategoriesHighlight();
    });
  
  // FAQ - Loja de Jogos
  // Array com as perguntas e respostas do FAQ
  var faqData = [
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer: "Aceitamos cartão de crédito, débito, Pix e boleto bancário."
    },
    {
      question: "Como recebo meu jogo após a compra?",
      answer: "Você receberá o código de ativação por e-mail imediatamente após a confirmação do pagamento."
    },
    {
      question: "Os jogos são originais?",
      answer: "Sim. Todos os jogos vendidos são originais, com garantia de ativação nas plataformas oficiais (Steam, Xbox, PlayStation, etc)."
    },
    {
      question: "Em quanto tempo meu pedido é liberado?",
      answer: "Pagamentos via cartão e Pix são liberados em poucos minutos. Boleto pode levar até 2 dias úteis."
    },
    {
      question: "Não recebi meu código. O que faço?",
      answer: "Verifique sua caixa de spam. Caso não encontre, entre em contato pelo nosso suporte com o número do pedido."
    },
    {
      question: "Posso pedir reembolso?",
      answer: "Sim, desde que o código não tenha sido ativado. Após a ativação, não é possível realizar reembolso."
    }
  ];
  
  // Função para criar o FAQ
  function criarFAQ() {
    // Cria o container principal do FAQ
    var $faqContainer = $('<div>', {
      'class': 'faq-container',
      id: 'faq-section'
    });
  
    // Título da seção
    var $faqTitle = $('<h2>', {
      'class': 'faq-title',
      text: 'FAQ (Perguntas frequentes)'
    });
  
    // Container das perguntas
    var $faqList = $('<div>', {
      'class': 'faq-list'
    });
  
    // Cria cada item do FAQ
    $.each(faqData, function (index, item) {
      var $faqItem = $('<div>', {
        'class': 'faq-item',
        'data-index': index
      });
  
      // Cabeçalho da pergunta
      var $faqHeader = $('<div>', {
        'class': 'faq-header'
      }).on('click', function () {
        toggleFAQ(index);
      });
  
      // Texto da pergunta
      var $faqQuestion = $('<h3>', {
        'class': 'faq-question',
        text: item.question
      });
  
      // Ícone de expansão
      var $faqIcon = $('<span>', {
        'class': 'faq-icon',
        html: '+'
      });
  
      $faqHeader.append($faqQuestion, $faqIcon);
  
      // Conteúdo da resposta
      var $faqContent = $('<div>', {
        'class': 'faq-content'
      });
  
      var $faqAnswer = $('<p>', {
        'class': 'faq-answer',
        text: item.answer
      });
  
      $faqContent.append($faqAnswer);
  
      // Monta o item
      $faqItem.append($faqHeader, $faqContent);
  
      // Adiciona à lista
      $faqList.append($faqItem);
    });
  
    // Monta o FAQ completo
    $faqContainer.append($faqTitle, $faqList);
  
    return $faqContainer;
  }
  
  // Função para alternar a exibição das respostas
  function toggleFAQ(index) {
    var $faqItem = $('.faq-item[data-index="' + index + '"]');
    var $faqContent = $faqItem.find('.faq-content');
    var $faqIcon = $faqItem.find('.faq-icon');
    var isOpen = $faqItem.hasClass('active');
  
    // Fecha todos os outros itens
    $('.faq-item').each(function () {
      var $item = $(this);
      $item.removeClass('active');
      $item.find('.faq-content').css('max-height', '0px');
      $item.find('.faq-icon').html('+');
    });
  
    // Abre o item clicado se não estava aberto
    if (!isOpen) {
      $faqItem.addClass('active');
      $faqContent.css('max-height', $faqContent.prop('scrollHeight') + 'px');
      $faqIcon.html('−');
    }
  }
  
  // Função para inserir o FAQ na página
  function inserirFAQ(tentativas) {
    tentativas = tentativas || 0;
  
    // Garante que não insere duplicado
    if ($('#faq-section').length) return;
  
    var $topRatingsSection = $('.home .top-ratings');
    var $footerSection = $('.footer');
  
    if ($topRatingsSection.length) {
      // Insere o FAQ antes da seção .home .top-ratings
      var $faqSection = criarFAQ();
      $faqSection.insertBefore($topRatingsSection);
    } else if ($footerSection.length) {
      // Se não existir .top-ratings, insere antes do .footer
      var $faqSectionFooter = criarFAQ();
      $faqSectionFooter.insertBefore($footerSection);
    } else if (tentativas < 10) {
      // Tenta novamente após um pequeno delay, até 10 vezes
      setTimeout(function () {
        inserirFAQ(tentativas + 1);
      }, 200);
    }
  }
  
  // Função para atualizar o FAQ (útil para modificar perguntas/respostas)
  function atualizarFAQ(novoFAQData) {
    // Remove o FAQ existente
    var $faqExistente = $('#faq-section');
    if ($faqExistente.length) {
      $faqExistente.remove();
    }
  
    // Atualiza os dados (substitui o conteúdo do array)
    faqData.length = 0;
    Array.prototype.push.apply(faqData, novoFAQData);
  
    // Recria o FAQ
    inserirFAQ();
  }
  
  // Função para adicionar uma nova pergunta ao FAQ
  function adicionarPergunta(pergunta, resposta) {
    faqData.push({
      question: pergunta,
      answer: resposta
    });
  
    // Recria o FAQ com a nova pergunta
    var $faqExistente = $('#faq-section');
    if ($faqExistente.length) {
      $faqExistente.remove();
    }
    inserirFAQ();
  }
  
  // Função para remover uma pergunta do FAQ
  function removerPergunta(index) {
    if (index >= 0 && index < faqData.length) {
      faqData.splice(index, 1);
  
      // Recria o FAQ sem a pergunta removida
      var $faqExistente = $('#faq-section');
      if ($faqExistente.length) {
        $faqExistente.remove();
      }
      inserirFAQ();
    }
  }
  
  // Inicializa o FAQ quando a página carregar (DOM pronto)
  $(document).ready(function () {
    setTimeout(function () {
      inserirFAQ();
    }, 100);
  });
  
  // Também tenta inserir quando a página estiver totalmente carregada
  $(window).on('load', function () {
    if (!$('#faq-section').length) {
      setTimeout(function () {
        inserirFAQ();
      }, 200);
    }
  });
  
  // Exporta as funções para uso externo (se necessário)
  window.FAQ = {
    criarFAQ: criarFAQ,
    inserirFAQ: inserirFAQ,
    atualizarFAQ: atualizarFAQ,
    adicionarPergunta: adicionarPergunta,
    removerPergunta: removerPergunta,
    toggleFAQ: toggleFAQ,
    faqData: faqData
  };
  
  });
  
  // Adiciona a seção de comparação de preços após .home .collection-6
  // Tente até conseguir

  // Definição das variáveis e dados
  const leftImageUrl = 'https://symmagency.github.io/dwgames/assets/banners/bfsix.png';
  const rightImageUrl = 'https://symmagency.github.io/dwgames/assets/banners/wwm.png';
  const prices = [
    { value: 'R$ 10', link: '/busca?q=ps&max=10' },
    { value: 'R$ 20', link: '/busca?q=ps&max=20' },
    { value: 'R$ 30', link: '/busca?q=ps&max=30' },
    { value: 'R$ 40', link: '/busca?q=ps&max=40' },
    { value: 'R$ 50', link: '/busca?q=ps&max=50' },
    { value: 'R$ 100', link: '/busca?q=ps&max=100' },
    { value: 'R$ 200', link: '/busca?q=ps&max=200' },
    { value: 'R$ 300', link: '/busca?q=ps&max=300' }
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
            ${prices.map(
              price =>
                `<li>
                  <a href="${price.link}">${price.value}</a>
                </li>`
            ).join('')}
          </ul>
        </div>
        <div class="img-right">
          <img src="${rightImageUrl}" alt="Mortal Kombat 1">
        </div>
      </div>
    `;
  }

  // Função que tenta inserir até conseguir
  function tryInsertPriceComparison() {
    const $collection6 = $('.home .collection-6');
    if ($collection6.length > 0 && $('.comparison-container').length === 0) {
      const $comparisonSection = $(PriceComparisonSection());
      $collection6.after($comparisonSection);
      // Confirma se inseriu, senão tenta novamente
      if ($('.comparison-container').length === 0) {
        setTimeout(tryInsertPriceComparison, 300);
      }
    } else if ($('.comparison-container').length === 0) {
      // Se não achou o alvo, tenta novamente
      setTimeout(tryInsertPriceComparison, 300);
    }
  }

  // Tente até conseguir inserir quando o DOM estiver carregado
  $(document).ready(function() {
    tryInsertPriceComparison();
  });
  
  // Variáveis configuráveis
  const ctRumblePrice = 'R$ 143,91';
  const ctRumbleLink = 'https://www.dwgames.com.br/ghost-of-yotei-ps5-edicao-standard-midia-digital/p';
  
  // Gera o HTML do card com imagem para desktop e mobile
  function CrashTeamRumbleCard() {
    return `
      <a href="${ctRumbleLink}" class="ctrumble-card-link">
        <div class="ctrumble-card">
          <div class="price-yt-video">
            <div class="price-yt">
              <div>
                ${ctRumblePrice} <span>no pix</span>
              </div>
            </div>
            <div class="cta-yt-video">
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
  
  
  // Função para gerar o HTML igual ao da imagem da central de ofertas DW
  function renderDWPromosHero() {
    return `
      <section class="dw-promos-hero">
      <img class="percent-promo" src="https://symmagency.github.io/dwgames/assets/banners/percent-promo.png" alt="Porcentagem DW Promo"/>
          <div class="append-promo-content">
        <div>
          <h1>
            <img src="https://symmagency.github.io/dwgames/assets/banners/dw-promo.svg" alt="Promos da DW">
          </h1>
          <p>
            Bem-vindo à <span>central de ofertas da DW GAMES</span> — o lugar certo para gamers que querem jogos originais para PS4/PS5 com preço baixo, entrega digital rápida e segurança garantida.
          </p>
        </div>
        <div>
          <div class="coupon-promo">
            <span>
              JOGOS COM ATÉ <span>50% DE DESCONTO</span>
            </span>
          </div>
        </div>
        <div>
          <div>Confira os jogos e aproveite!</div>
          <div>↓</div>
        </div>
        </div>
      </section>
    `;
  }

  // Tente até conseguir inserir o conteúdo no local correto
  function tryInsertDWPromosHero(retries = 15, delay = 300) {
    var $holderResults = $('.promotion .holder-results');
    if ($holderResults.length && $holderResults.find('.dw-promos-hero').length === 0) {
      $holderResults.prepend(renderDWPromosHero());
    } else if (retries > 0) {
      setTimeout(function() {
        tryInsertDWPromosHero(retries - 1, delay);
      }, delay);
    }
  }

  $(document).ready(function() {
    tryInsertDWPromosHero();
  });
  

// Tente até conseguir inserir o bloco após .main-product-buy-button-holder
function tryInsertRatingTotal(retries = 12, delay = 250) {
  var $holder = $('.main-product-buy-button-holder');
  // Tentar apenas se ainda não inserido
  if ($holder.length && $('.rating-total').length === 0) {
    $holder.after(`
      <div class="rating-total">
          <a href="https://www.instagram.com/stories/highlights/18277528633168627/">
              <span>+1000 avaliações</span>
              <strong><span>Clique aqui</span> para ver os comentários de nossos clientes!</strong>
          </a>
      </div>
    `);
    return;
  }
  if (retries > 0) {
    setTimeout(function() {
      tryInsertRatingTotal(retries - 1, delay);
    }, delay);
  }
}

$(document).ready(function(){
  tryInsertRatingTotal();
});

  
  (function($){
    function tryInsertIconSearch(retries = 10, delay = 200) {
      if ($(window).width() >= 768) return;
      var $mini = $('.header-content .rkt-header-shopping-page-redirect');
      if ($mini.length && !$('.icon-search.i-s-header').length) {
        $mini.before('<div class="icon-search i-s-header" role="button" tabindex="0"></div>');
        $('.icon-search.i-s-header').on('click', function(){
          $('.holder-search').toggleClass('open');
        });
        return;
      }
      if (retries > 0) setTimeout(function(){ tryInsertIconSearch(retries - 1, delay); }, delay);
    }
  
    $(function(){ // DOM ready
      tryInsertIconSearch();
      // opcional: re-tentar ao redimensionar para mobile
      $(window).on('resize', function(){ if ($(window).width() < 768) tryInsertIconSearch(); });
    });
  })(jQuery);
  