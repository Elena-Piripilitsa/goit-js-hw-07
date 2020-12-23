// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const renderBtnRef = document.querySelector(`button[data-action="render"]`);
const destroyBtnRef = document.querySelector(`button[data-action="destroy"]`);
const inputRef = document.querySelector(`input[type="number"]`);
const boxesRef = document.querySelector(`#boxes`);

function randomColor() {
  let color =
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")";
  return color;
}

let width = 20;
let height = 20;

function destroyBoxes() {
  boxes.textContent = "";
  inputRef.value = 0;
  width = 20;
  height = 20;
}

function createBoxes() {
  const amount = inputRef.value;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.classList.add("newBox");
    div.style.backgroundColor = randomColor();
    div.style.width = `${(width += 10)}px`;
    div.style.height = `${(height += 10)}px`;
    document.getElementById("boxes").appendChild(div);
  }
}

renderBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);
