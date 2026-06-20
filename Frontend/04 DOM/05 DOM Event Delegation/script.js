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
const btn = document.querySelector("button");
const p = document.querySelector("p");
const box = document.createElement('div')
box.classList.add('box')
let time = 0;
let move;
const randomColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return (`rgb(${r},${g},${b})`);
}
const randomBox = () => {
  main.append(box)
  p.innerHTML = `<p>Time : ${time++} sec </p>`;
  const top = Math.floor(Math.random() * 90);
  const left = Math.floor(Math.random() * 90);
  box.style.left = left + "%";
  box.style.top = top + "%";
};
btn.addEventListener("click", () => {
  randomBox()
  move = setInterval(() => {
    box.style.backgroundColor = randomColor()
    randomBox();
  }, 1000);
  setTimeout(() => {
    clearInterval(move);
    console.log("stopped");
  }, 10000);
});


