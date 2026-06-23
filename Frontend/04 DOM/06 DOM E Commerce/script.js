// Selecting create Button in the homepage
const body = document.body;
const createBtn = document.querySelector(".create");
const main = document.querySelector("main");
const formClass = document.querySelector(".form");
const closeBtn = document.querySelector(".ri-close-circle-line");
const form = document.querySelector("form");
const inp = document.querySelector("input");
const product = document.querySelector(".product");
const productArr = [];

let ui = () => {
  product.innerHTML = ''
  productArr.forEach((e) => {
    product.innerHTML += `<div class="product-card">
                            <div class="pic">
                                <img src= ${e.image} alt="">
                            </div>
                            <div class="text">
                                <h3>Name: ${e.productName}</h3>
                                <h5>Price: ${e.price}</h5>
                                <p>Description: ${e.description}</p>
                            </div>
                            <div class="btns">
                                <button onClick="updateProduct('${e.productName}')" class="update">Update</button>
                                <button class="delete">Delete</button>
                            </div>
                        </div>`;
  });
};


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
  ui()
  form.reset();
  formClass.style.display = "none";
});

const updateProduct = (name) => {
    // formClass.style.display = "flex";
    // console.log(name);
    let prod = productArr.find((e) => {
        return e.productName === name;
    })
    console.log(prod);
}