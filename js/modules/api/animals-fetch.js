import initNumbersAnimation from '../numbers-animation.js';

export default function initFetchAnimals() {
  async function animalsFetch(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      const gridNumbers = document.querySelector('.numeros-grid');
      animalsJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        gridNumbers.appendChild(divAnimal);
      });
      initNumbersAnimation();
    } catch (erro) {
      console.error(erro);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero> ${animal.total}</span>`;
    return div;
  }

  animalsFetch('../../animals-api.json');
}
