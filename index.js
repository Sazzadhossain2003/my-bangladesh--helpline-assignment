// section-1
let count = 0;
const loveCount = document.getElementById("love-count");
const loveIcons = document.getElementsByClassName("hardPng");
for (const icon of loveIcons) {
  icon.addEventListener('click', function () {
    count++;
    loveCount.textContent = count;
  });
}