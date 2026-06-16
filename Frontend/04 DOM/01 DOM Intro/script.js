// Selection of Element
const h2 = document.querySelector('h2')
console.log(h2); // this will print sometime an object and sometime an element
console.dir(h2) // this will always print the element not objenct
const all = document.querySelectorAll('h2')
const tag = document.getElementsByTagName('h2')
console.log(all); // node list (ye reload pe chalta hai)
console.log(tag); // html collection (ye live chalta hai)
const ptag = document.querySelector('p')
const boxContainer = document.querySelector('.container')
console.log(boxContainer);
console.log(ptag);
const cls = document.getElementsByClassName('h2Class')
console.log(cls);
const ids = document.getElementById('h2Id')

// changing of element
/* 
.innerHTML (pura content hata kar change kar dega)
.innerText (ye bhi sab change kar dega)
.textContent
*/
h2.textContent = 'used query selector because it is prefered'
ptag.style.backgroundColor = 'yellow'
// boxContainer.textContent = 'Hello'
cls[0].style.backgroundColor = 'red' // for selecting by className you must give [0] to acces it else the changes you applied is not shown 
// ids.style.backgroundColor = 'green'
// ids.innerHTML = 'Using iner html'
// ids.innerText = 'Using iner html'
// ids.textContent = 'Using iner html'



// Process of DOM
/*
    1. Select karte hai 
    2. is select ko store karte hai
    3. changes ko apply karte hai
*/
