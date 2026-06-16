console.log(document); // this consist of whole html file

console.log('child nodes',document.childNodes);
console.log('children', document.children);

let body = document.body
console.log('body child nodes', body.childNodes);
console.log('body children', body.children);

console.log(document.querySelector('main').childNodes);
console.log(document.querySelector('main').children);

// let main = document.querySelector('main')
// let h2 = main.children[0]
// console.log(h2.textContent = 'this is changed');
const combine = document.querySelector('main').children[0]
console.log(combine.innerHTML = 'mai update ho gaya hu via dom by <u>Mantu</u>');
// console.log(combine.textContent = 'mai update ho gaya hu via dom by <b>Mantu</b>');
// console.log(combine.inner
// Text = 'mai update ho gaya hu via dom by <u>Mantu</u>');

// **************** difference between innerHTML, textContent, innerText
console.log(body.textContent); // text content se as it is milege
console.log(body.innerText); // normal sequence me milege
console.log(body.innerHTML); // isme pure html format me milega

// ************* for styling the element
const main = document.querySelector('main')
main.style.border = '2px solid red'
main.style.borderRadius = '10px'

body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.gap = '2rem'
body.style.padding = '1rem'

// ***************** Classes (classlist.add/remove/toggle/replace/exist)
let clsHead = document.querySelector('.head')
clsHead.innerHTML = 'ClassList'
clsHead.style.backgroundColor = 'blue'
clsHead.classList.replace('classes', 'new')
clsHead.classList.remove('head')
clsHead.classList.toggle('dark') // agar ye hai to remove kar dega nhi to add kar dega
console.log(clsHead);



// ************ button me toggle apply karna
const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    btn.classList.toggle('ylow')
})
const btn2 = document.querySelector('.btn2')
btn2.addEventListener('click', () => {
    body.classList.toggle('dark')
})

// **************** turn on bulb
const glow = document.querySelector('.glow-btn')
const box = document.querySelector('.box')
glow.addEventListener('click', () => {
    if(box.classList.toggle('magic')){
        glow.textContent = 'Turn Off'
    }else{
        glow.textContent = 'Turn On'
    }
})

// ********************** Self Revision
// use of creatElement, createTextNode
const h4 = document.createElement('h4')
const text = document.createTextNode('dom')
h4.appendChild(text)
body.appendChild(h4)






