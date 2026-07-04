const body = document.body
const addBtn = document.querySelector('.transaction-btn')
const form = document.querySelector('.form-section')
const formBg = document.querySelector('.form-bg')
const close = document.querySelector('.form-head i')


// Add Transaction Form open and close
const openForm = () => {
    formBg.style.display = 'flex'
    form.style.display = 'flex'
}
const closeForm = () => {
    formBg.style.display = 'none'
    form.style.display = 'none'
}
addBtn.addEventListener('click', openForm)
close.addEventListener('click',closeForm)
formBg.addEventListener('click',closeForm)
form.addEventListener('click',(e) => {
    e.stopPropagation()
})