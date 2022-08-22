import outsideClick from './outsideclick.js';
export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const userEvents = ['touchstart', 'click'];

  dropdownMenus.forEach((menu) => {
    userEvents.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });

    // Equivalente a:
    //menu.addEventListener('click', handleClick);
    //menu.addEventListener('touchstart', handleClick);
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('active');
    outsideClick(this, userEvents, () => {
      this.classList.remove('active');
    });
  }
}
