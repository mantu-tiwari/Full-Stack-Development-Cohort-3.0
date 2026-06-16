/*  
    Attribute - it is the predefined HTML attribute like id,class,src,placeholder (it is fix)
    Property - The value of that attribute (can vary)
    Types of Attribur - 1.setAttrubute 2.getAttrubute 3.removeAttrubute 4.hasAttrubute
*/
const id = document.querySelector('#id1')
// const res = id.getAttribute('id')
const res = id.getAttribute('class')  // getAttrubute
console.log(res);
id.setAttribute('width', '200px') // setAttribute
console.log(id.getAttribute('width'));
id.removeAttribute('class') // remveAttribute
console.log(id.hasAttribute('class')); // hasAttribute

// creating custum attribute
const card = document.querySelector('.card')
console.log(card.getAttribute('data-user-id'));
card.dataset.userId = '678' // for changing custum attribute
console.log(card.getAttribute('data-user-id'));

// Getting value from input tag form html
const inp = document.querySelector('#user')
const btn = document.querySelector('button')
const pass = document.querySelector('#password')
btn.addEventListener('click', () => {
    console.log('Name: ',inp.value);
    console.log('Password: ',pass.value);
})

const main = document.querySelector('main')
console.log(document.body.childNodes);
console.log(document.body.children);
console.log(main.childNodes);
console.log(main.children);

const divs = document.querySelectorAll('div') // use this for multiple divs
console.log(divs[2].childNodes);
console.log(divs[2].children);

// creating, inserting and deleting elements through dom 
// creation
const footer = document.createElement('footer')
const span = document.createElement('span')
// Insertion
span.textContent = 'Hey this is Dynamic'
console.log(footer);
main.append(footer,span) // modern approach to use append rather than appendChild because appendChild can insert one element at a time whlle appned can insert multiple
// main.appendChild(footer)
// main.appendChild(span) 

// const box1 = document.querySelector('#box1')
// const box2 = document.querySelector('#box2')
// const box3 = document.querySelector('#box3')
// box1.style.backgroundColor = 'lightseagreen'
// box2.style.backgroundColor = 'palevioletred'
// box3.style.backgroundColor = 'orange'
// container.insertBefore(box2, box1) // this help to move the element (also insertBefor is the old approach)
const container = document.querySelector('.container')
const box1 = document.createElement('div')
const box2 = document.createElement('div')
const box3 = document.createElement('div')
box1.classList.add('box')
box2.classList.add('box')
box3.classList.add('box')
container.append(box1,box2,box3)


