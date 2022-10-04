/* eslint-disable no-console */
import NumbersAnimation from '../numbers-animation.js';

export default function animalsFetch(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero> ${animal.total}</span>`;
    return div;
  }

  function fillAnimals(animal) {
    const gridNumbers = document.querySelector(target);
    const divAnimal = createAnimal(animal);
    gridNumbers.appendChild(divAnimal);
  }

  function AnimalNumbersAnimation() {
    const numbersAnimation = new NumbersAnimation(
      '[data-numero]',
      '.numeros',
      'ativo',
    );
    numbersAnimation.init();
  }

  async function createAnimals() {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      animalsJSON.forEach((animal) => fillAnimals(animal));
      AnimalNumbersAnimation();
    } catch (erro) {
      console.error(erro);
    }
  }

  return createAnimals();
}
