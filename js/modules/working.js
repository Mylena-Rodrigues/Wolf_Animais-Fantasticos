export default class Working {
  constructor(working, activeClass) {
    this.working = document.querySelector(working);
    this.activeClass = activeClass;
  }

  workingData() {
    this.weekDays = this.working.dataset.semana.split(',').map(Number);
    this.times = this.working.dataset.horario.split(',').map(Number);
  }

  nowData() {
    const nowDate = new Date();
    this.now = {
      weekDay: nowDate.getDay(),
      time: nowDate.getUTCHours() - 3,
    };
  }

  isOpen() {
    this.isOpenDay = this.weekDays.indexOf(this.now.weekDay) !== -1;
    this.isOpenHour = this.now.time >= this.times[0] && this.now.time < this.times[1];
    return this.isOpenDay && this.isOpenHour;
  }

  activeOpen() {
    if (this.isOpen) {
      this.working.classList.add(this.activeClass);
    }
  }

  init() {
    this.workingData();
    this.nowData();
    this.activeOpen();
    return this;
  }
}
