import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"');
  const menuList = document.querySelector('[data-menu="list"');
  const userEvents = ['touchstart', 'click'];

  function openMenu() {
    menuList.classList.add('active');
    menuButton.classList.add('active');

    outsideClick(menuList, userEvents, () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    });
  }

  if (menuButton) {
    userEvents.forEach((userEvent) =>
      menuButton.addEventListener(userEvent, openMenu),
    );
  }
}
