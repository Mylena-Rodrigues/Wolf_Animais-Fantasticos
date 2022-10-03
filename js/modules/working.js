export default function initWorking() {}

const working = document.querySelector('[data-semana]');
const weekDays = working.dataset.semana.split(',').map(Number); // Utilizar o map(Number) em um array de string retorna automaticamente um array de int
const times = working.dataset.horario.split(',').map(Number);

const nowDate = new Date();
const now = {
  weekDay: nowDate.getDay(),
  time: nowDate.getHours(),
};

const isOpenDay = weekDays.indexOf(now.weekDay) !== -1;
const isOpenHour = now.time >= times[0] && now.time < times[1];

if (isOpenDay && isOpenHour) {
  working.classList.add('open');
}
