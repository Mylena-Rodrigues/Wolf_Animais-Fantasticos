export default function initAccordion() {
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