const body = document.body
const addBtn = document.querySelector('.transaction-btn')
const form = document.querySelector('.form-section')
const formBg = document.querySelector('.form-bg')
const close = document.querySelector('.form-head i')
const transactionCont = document.querySelector('.detail-container')
const formContainer = document.querySelector('form')
const deskInp = document.querySelector('#desk-inp')
const amountInp = document.querySelector('#amount-inp')
const dateInp = document.querySelector('#date-inp')
const categoryInp = document.querySelector('#category-inp')
const container = document.querySelector('.detail-container')
let transaction = [];

// (Add Transaction Form) open and close
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

// Add Transaction to All Transaction section
formContainer.addEventListener('submit', (e) => {
    e.preventDefault()
    let description = deskInp.value
    let amount = amountInp.value
    let date = dateInp.value
    let category = categoryInp.value
    if(description.trim() === '' || amount.trim() === '' || date.trim() === '' || category.trim() === ''){
        alert('Kindly fill all details')
        return
    }
    transaction.push({
        description,
        amount,
        date,
        category
    })
    ui()
    console.log(transaction);
    closeForm()
    formContainer.reset()
})
const ui = () => {
    container.innerHTML = ''
    transaction.forEach((e,i) => {
        container.innerHTML += `<div class="detail-card">
                <h4 id="tarik">${e.date}</h4>
                <h4>${e.description}</h4>
                <button>${e.category}</button>
                <h4>${e.amount}</h4>
                <div class="act-btn">
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>`
    })
}