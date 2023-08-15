const inputStringElement = document.getElementById("inputString");
const convertButton = document.getElementById("convertButton");
const resultElement = document.getElementById("result");

convertButton.addEventListener("click", () => {
  const inputString = inputStringElement.value.toLowerCase(); // Convert to lowercase for case insensitivity
  const result = convertString(inputString);
  resultElement.textContent = result;
});

function convertString(str) {
  let result = "";
  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str) {
    result += charCount[char] > 1 ? ")" : "(";
  }

  return result;
}
