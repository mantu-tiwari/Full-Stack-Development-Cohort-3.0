// Selecting create Button in the homepage
const body = document.body;
const createBtn = document.querySelector(".create");
const main = document.querySelector("main");
const formClass = document.querySelector(".form");
const closeBtn = document.querySelector(".ri-close-circle-line");
const form = document.querySelector("form");
const inp = document.querySelector("input");
const productArr = [];

createBtn.addEventListener("click", () => {
  formClass.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  formClass.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let productName = e.target[0].value;
  let description = e.target[1].value;
  let price = e.target[2].value;
  let image = e.target[3].value;
  if (
    productName.trim() === "" ||
    description.trim() === "" ||
    price.trim() === "" ||
    image === ""
  ) {
    alert("Kindly Fill All Details");
    return;
  }
  let obj = {
    productName,
    description,
    price,
    image,
  };
  productArr.push(obj);
  console.log(productArr);
  form.reset();
});
