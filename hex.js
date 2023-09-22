const hexBtn = document.getElementById("btn-hex");
const hexColor = document.querySelector(".right .color");

hexBtn.addEventListener("click", function () {
  let hexColorValue = "#";
  for (let i = 0; i < 6; i++) {
    hexColorValue += getRandomHexDigit();
  }
  hexColor.textContent = hexColorValue;
  document.querySelector(".right").style.backgroundColor = hexColorValue;
});

function getRandomHexDigit() {
  const hexDigits = "0123456789ABCDEF";
  return hexDigits[Math.floor(Math.random() * 16)];
}
