// Select the <h1> and print it in console.
const h1 = document.querySelector('h1')
console.log(h1);
// Select all paragraphs and print them.
const p = document.querySelectorAll('p')
console.log(p);
const p1 = document.getElementsByTagName('p')
console.log(p1);
// Count how many buttons exist on page.
const button = document.querySelectorAll('button')
let count = 0
button.forEach((e,i) => {
    count ++;
})
console.log('Total Number of buttuns are : ', count);
// change <h1>hello</h1> to welcome
const greet = document.querySelector('.greet')
greet.textContent = 'Welcome'
// Print the text inside:
console.log(greet.textContent);
// Add this HTML inside a div. h2 wale ko
const h2 = document.querySelector('h2')
const body = document.body
// body.removeChild(h2) // old method
h2.remove() // modern method
const div = document.createElement('div')
div.textContent = 'New Heading'
body.append(div)
// Get value from btn a click: inoput tag
const input = document.querySelector('input')
const btnA = document.querySelector('.btn')
btnA.addEventListener('click', () => {
    console.log(input.value);
})
// Add class active to:
const box = document.querySelector('.box')
box.classList.add('active')
box.classList.remove('hidden')
// Toggle class dark-mode on button click.
const click = document.querySelector('.click')
click.addEventListener('click', () => {
    body.classList.toggle('dark')
})
// Change background color to red using JS.
// body.style.backgroundColor = 'darkred'
// body.style.color = 'white'
console.log(box);
const isContain = box.classList.contains('active')
console.log(isContain);
// Create a new div dynamically
const elem = document.createElement('div')
elem.classList.add('container')
elem.textContent = 'This is dynamically div which has container class'
body.append(elem)
const extra = document.querySelector('.extra')
extra.addEventListener('click', () => {
    console.log('click me');
})
const change = document.querySelector('.unique')
change.addEventListener('click', () => {
    greet.textContent = 'Good Morning'
})
const aio = document.querySelector('.aio')
aio.addEventListener('click', () => {
    aio.classList.add('active')
})
const append = document.querySelector('.append')
append.addEventListener('click', () => {
    const antotherDiv = document.createElement('div')
    body.append(antotherDiv)
})
const b1 = document.querySelector('.b1')
const createP = document.createElement('p')
const createInp = document.createElement('input')
createInp.setAttribute('type','text')
createInp.setAttribute('placeholder','name')
body.append(createInp, createP)
createInp.addEventListener('input',() => {
    createP.textContent = createInp.value
})

// Play with JSON File
const h3 = document.querySelector('h3')
const data = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 28
  },
  {
    "id": 2,
    "name": "Sarah Wilson",
    "email": "sarah.wilson@example.com",
    "age": 24
  },
  {
    "id": 3,
    "name": "Michael Brown",
    "email": "michael.brown@example.com",
    "age": 32
  }
]
h3.addEventListener('click', () => {
    console.log("let's play with json");
})
data.forEach((e,i) => {
    console.log(e);
})




