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

//Accordion List
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

initAccordion();

//Smooth Scroll
function initSmoothScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth', //desliza suavemente até o meio da sessão
      block: 'start', //alinha o topo da sessão com o topo da tela
    });

    /** Scroll To
          *** ScrollTo possui dois argumentos, o primeiro é o eixo x e o segundo é o eixo y
          
          const top = section.offsetTop;
      
          **Forma mais geral
          window.scrollTo(0, top)
         
      
          **Forma alternativa
           window.scrollTo({
              top: top,
              behavior: 'smooth'
          })
      
          **/
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

initSmoothScroll();

//Scroll Animation
function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll');
  const halfWindow = window.innerHeight * 0.6;
  if (sections.length) {
    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfWindow < 0;
        if (isSectionVisible) {
          section.classList.add('ativo');
        }

        /**Caso queira retirar a animação quando o usuário der scroll pra cima
              else 
                  section.classList.remove('ativo');
              **/
      });
    }

    animateScroll();

    window.addEventListener('scroll', animateScroll);
  }
}

initScrollAnimation();
