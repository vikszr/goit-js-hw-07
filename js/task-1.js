const listItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach((item) => {
  const h2s = item.querySelector("h2");
  console.log(`Category: ${h2s.textContent}`);

  const innerLis = item.querySelectorAll("li");
  console.log(`Elements: ${innerLis.length}`);
});
