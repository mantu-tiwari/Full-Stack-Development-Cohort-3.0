// // Event Delegation
// const main = document.querySelector("main");
// let sum = 0;
// main.addEventListener("click", (e) => {
//   sum += Number(e.target.textContent);
//   console.log(sum);
// });

// ********************************* Project 
// Start button pe click karo ye apna position change karega
const main = document.querySelector("main");
const box = document.querySelector(".box");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const top = Math.floor(Math.random() * 90);
  const left = Math.floor(Math.random() * 90);
  box.style.left = left+'%'
  box.style.top = top+'%'
});

