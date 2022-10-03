export default function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll');
  const halfWindow = window.innerHeight * 0.6;
  function animateScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - halfWindow < 0;
      if (isSectionVisible) section.classList.add('ativo');
      else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }

      /* * Caso queira retirar a animação quando o usuário der scroll pra cima
            else section.classList.remove('ativo');
      * */
    });
  }
  if (sections.length) {
    animateScroll();

    window.addEventListener('scroll', animateScroll);
  }
}
