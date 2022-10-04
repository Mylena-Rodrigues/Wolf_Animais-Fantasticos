import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    if (this.userEvents === undefined) {
      this.userEvents = ['touchstart', 'click'];
    } else {
      this.userEvents = events;
    }
    this.activeClass = 'active';
    this.openMenu = this.openMenu.bind(this);

    // É possível chamar o método init() no construtor
    // assim no momento que a classe for criada, ela é iniciada
    // this.init();
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);

    outsideClick(this.menuList, this.userEvents, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.userEvents.forEach((userEvent) =>
      this.menuButton.addEventListener(userEvent, this.openMenu),
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
