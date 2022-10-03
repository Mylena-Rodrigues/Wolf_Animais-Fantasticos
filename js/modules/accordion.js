export default function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordionList.length) {
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
