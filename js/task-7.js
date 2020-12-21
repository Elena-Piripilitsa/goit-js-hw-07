// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const fontSizeBtnRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text");
spanTextRef.style.fontSize = `${fontSizeBtnRef.value}px`;
// чтобы не прыгал размер шрифта

fontSizeBtnRef.addEventListener("input", () => {
  spanTextRef.style.fontSize = `${fontSizeBtnRef.value}px`;
});
