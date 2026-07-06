const body = document.body
const addBtn = document.querySelector('.transaction-btn')
const form = document.querySelector('.form-section')
const formBg = document.querySelector('.form-bg')
const close = document.querySelector('.form-head i')
const transactionCont = document.querySelector('.detail-container')
const formContainer = document.querySelector('form')
const typeInp = document.querySelector('#type-inp')
const deskInp = document.querySelector('#desk-inp')
const amountInp = document.querySelector('#amount-inp')
const dateInp = document.querySelector('#date-inp')
const categoryInp = document.querySelector('#category-inp')
const container = document.querySelector('.detail-container')
const balanceAmount = document.querySelector('#balance h2')
const incomeAmount = document.querySelector('#income h2')
const expenseAmount = document.querySelector('#expense h2')
const totalAmount = document.querySelector('#total h2')
let transaction = [];
let updateIndex = null

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
    let type = typeInp.value
    let description = deskInp.value
    let amount = Number(amountInp.value)
    let date = dateInp.value
    let category = categoryInp.value
    if(description.trim() === '' || category.trim() === ''){
        alert('Kindly fill all details')
        return
    }
   let obj = {
        type,
        description,
        amount,
        date,
        category
    }
    if (updateIndex !== null){
        transaction[updateIndex] = obj
        updateIndex = null
    }else{
        transaction.push(obj)
    }
    ui()
    updateSummary()
    console.log(transaction);
    formContainer.reset()
    closeForm()
})
// Ui Creation
const ui = () => {
    container.innerHTML = ''
    transaction.forEach((e,i) => {
        container.innerHTML += `<div class="detail-card">
                <h4 id="tarik">${e.date}</h4>
                <h4>${e.description}</h4>
                <button>${e.category}</button>
                <h4>${e.amount}</h4>
                <div class="act-btn">
                    <i onClick="updateTransaction('${e.description}')" class="fa-solid fa-pen"></i>
                    <i onclick="deleteTransaction(${i})" class="fa-solid fa-trash"></i>
                </div>
            </div>`
    })
}
// Summary card update
const updateSummary = () => {
    let income = 0
    let expense = 0
    let currentBalance = 0
    transaction.forEach((e,i) => {
        if(e.type === 'Income'){
            income += e.amount
        }else{
            expense += e.amount
        }
    })
    currentBalance = income-expense
    balanceAmount.textContent = `$${currentBalance}`
    incomeAmount.textContent = `$${income}`
    expenseAmount.textContent = `$${expense}`
    totalAmount.textContent = transaction.length
    chart(income,expense)
}
// Creating Chart
const chart = (income, expense) => {
var xValues = ["income","Expense"];
var yValues = [income,expense];
var barColors = ["green", "red"];
new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      label: "Transaction",
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
});
}
chart()

// Delete Transaction
let deleteTransaction = (i) => {
    transaction.splice(i,1)
    console.log(transaction);
    ui()
    updateSummary()
}

// Update Transaction
let updateTransaction = (data) => {
    openForm()
    let transactionDetail = transaction.find((e) => e.description === data)
    updateIndex = transaction.findIndex((e) => e.description === data)
    console.log(transactionDetail);
    formContainer[0].value = transactionDetail.type
    formContainer[1].value = transactionDetail.description
    formContainer[2].value = transactionDetail.amount
    formContainer[3].value = transactionDetail.date
    formContainer[4].value = transactionDetail.category
}


