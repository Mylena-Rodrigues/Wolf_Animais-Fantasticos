//Tab Navigation
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tab-menu li');
  const tabContent = document.querySelectorAll('.js-tab-content section');

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => activeTab(index));
    });

    // Caso DEV não possua acesso ao DOM | Como adicionar a classe ativo assim que a página carregar
    // tabContent[0].classList.add('ativo');
  }
}

initTabNav();