const textInput = document.getElementById("name-input");
const textOutput = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
  const name = event.currentTarget.value.trim();
  if (name === "") {
    textOutput.textContent = `Anonymous`;
  } else {
    textOutput.textContent = name;
  }
});
