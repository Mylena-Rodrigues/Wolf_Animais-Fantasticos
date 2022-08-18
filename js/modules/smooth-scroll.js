export default function initSmoothScroll() {
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