const body = document.body

// 1. Counter App
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const result = document.querySelector('.result')
let count = 0
plus.addEventListener('click', () => {
    result.innerHTML = `Count : ${++count}`
})
minus.addEventListener('click', () => {
    result.innerHTML = `Count : ${--count}`
})

// 2. Show/Hide Password
const pass = document.querySelector('.password')
const click = document.querySelector('i')
const show = document.querySelector('.show')
click.addEventListener('click', () => {
    if(pass.type == 'text'){
        pass.type = 'password'
    }else{
        pass.type = 'text'
    }
})

// 3. Character Counter
const char = document.querySelector('.char')
const store = document.querySelector('.store')
let a = 0
char.addEventListener('input', (e) => {
    if (e.data){
        store.innerHTML = `Count : ${++a}`
    }else{
        
        store.innerHTML = `Count : ${--a}`
    } 
})

// 4. Color Changer
const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')
const box = document.querySelector('.box')
red.addEventListener('click', () => {
    box.style.backgroundColor = 'palevioletred'
})
blue.addEventListener('click', () => {
    box.style.backgroundColor = 'royalblue'
})
green.addEventListener('click', () => {
    box.style.backgroundColor = 'lightgreen'
})
yellow.addEventListener('click', () => {
    box.style.backgroundColor = 'palegoldenrod'
})

// 5. Dark Mode Toggle
const circle = document.querySelector('.circle')
const togg = document.querySelector('.togg')
togg.addEventListener('click', () => {
    if(body.classList.toggle('toggle')){
         togg.style.justifyContent = 'flex-end'
    }else{
        togg.style.justifyContent = 'flex-start'
    }
})

// 6. Accordion
const outer = document.querySelector('.outer')
const inner = document.querySelector('.inner')
const arrow = document.querySelector('#drop')
outer.addEventListener('click', () => {
    inner.classList.toggle('hide')
    drop.classList.toggle('ri-arrow-drop-right-line')

})