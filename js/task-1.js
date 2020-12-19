const quantityCategories = document.querySelectorAll("li.item");
console.log(`В списке ${quantityCategories.length} категории.`);
quantityCategories.forEach((item) => {
  console.log(
    `Категория: ${
      item.querySelector("h2").textContent
    } \nКоличество элементов: ${item.querySelectorAll("li").length}`
  );
});
