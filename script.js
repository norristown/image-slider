const images = document.querySelectorAll("#carousel img");
const dots = document.querySelector("#dots");
const desc = document.querySelector("#desc");

let speed = 3000;
let index = 0;
let intervalID;
function updateContent() {
  images.forEach((item) => item.classList.remove("active"));
  images[index].classList.add("active");
  const dot = document.querySelectorAll(".dot");
  dot.forEach((item) => {
    item.classList.remove("active");
  });
  dot[index].classList.add("active");
}

images.forEach((image, i) => {
  const span = document.createElement("span");
  span.className = "dot";
  if (i === 0) span.classList.add("active");
  span.addEventListener("click", () => {
    index = i;
    startInterval();
    updateContent();
  });
  dots.appendChild(span);
});
startInterval();
function startInterval() {
  if (intervalID) clearInterval(intervalID);
  intervalID = setInterval(() => {
    index++;
    if (index === images.length) index = 0;
    updateContent();
  }, speed);
}

updateContent();
