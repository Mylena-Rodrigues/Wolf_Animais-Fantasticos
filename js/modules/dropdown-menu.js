import outsideClick from './outsideclick.js';

export default class DropDownMenu {
  constructor(dropDownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropDownMenus);
    this.activeClass = 'active';
    // define touchstart e click como argumentos padrão de events
    // caso user não passe os valores
    if (this.userEvents === undefined) this.userEvents = ['touchstart', 'click'];
    else this.userEvents = events;
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  // ativa o dropdown e adiciona a função que observa o clique
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle(this.activeClass);
    outsideClick(element, this.userEvents, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdown menu
  addDropDownMenuEvents() {
    this.dropdownMenus.forEach((menu) => {
      this.userEvents.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropDownMenuEvents();
    }
    return this;
  }
}
