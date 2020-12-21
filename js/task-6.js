// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const validationInputRef = document.querySelector("#validation-input");

validationInputRef.addEventListener("blur", (event) => {
  if (
    event.target.value.length ===
    Number(validationInputRef.getAttribute("data-length"))
  ) {
    validationInputRef.classList.add("valid");
    validationInputRef.classList.remove("invalid");
  } else {
    validationInputRef.classList.remove("valid");
    validationInputRef.classList.add("invalid");
  }
});
