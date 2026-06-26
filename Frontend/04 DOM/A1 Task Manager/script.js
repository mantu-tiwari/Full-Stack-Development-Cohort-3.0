const body = document.body
const main = document.querySelector('main')
const createBtn = document.querySelector('.create-btn')
const formClass = document.querySelector('.form')
const close = document.querySelector('.ri-close-circle-line')
const darkMode = document.querySelector('.dark-mode')
const taskContainer = document.querySelector('.task-container')
const nav = document.querySelector('nav')
const form = document.querySelector('form')
const container = document.querySelector('.bottom')
const formBtn = document.querySelector('.add-task')
const taskArr = []
let updateIdx = null

createBtn.addEventListener('click',() => {
    formClass.style.display = 'flex'
})

close.addEventListener('click', ()=> {
    formClass.style.display = 'none'
})

darkMode.addEventListener('click',() => {
    if (main.classList.toggle('dark')){
        taskContainer.style.backgroundColor = 'grey'
        nav.style.backgroundColor = 'grey'
        nav.style.color = 'white'
    }else{
        taskContainer.style.backgroundColor = 'white'
        nav.style.backgroundColor = '#BFDDF0'
        nav.style.color = '#003edb'
    }
})

let ui = () => {
    container.innerHTML = ''
    taskArr.forEach((e,i) => {
        container.innerHTML += `<div class="task ${e.completed ? 'completed' : ''}">
            <div class="task-text">
              <h3>Task: ${e.task}</h3>
              <p>Category: ${e.category}</p>
            </div>
            <div class="task-btn">
              <button onClick="updateTask('${e.task}')" class="edit">Edit</button>
              <button onClick="completeTask(${i})" class="complete">
                ${e.completed ? 'Completed ✓' : 'Complete'}
              </button>
              <button onClick="deleteTask(${i})" class="delete">Delete</button>
            </div>
          </div>`
    })
}


form.addEventListener('submit',(e) => {
    e.preventDefault()
    let task = e.target[0].value
    let description = e.target[1].value
    let category = e.target[2].value
    if (
        task.trim() === '' ||
        description.trim() === '' ||
        category === 'All Categories' 
    ){
        alert('Kindly Fill all details')
        return
    }
    let obj = {
        task,
        description,
        category,
        completed: false
    }
    if(updateIdx !== null){
        taskArr[updateIdx] = obj
        updateIdx = null
        formBtn.textContent = 'Add Task'
    }else{
        taskArr.push(obj)
    }
    
    ui()
    form.reset()
    formClass.style.display = 'none'
})

const updateTask = (task) => {
    // console.log(task);
    formClass.style.display = 'flex'
    formBtn.textContent = 'Update'
    const taskList = taskArr.find((e) => {
        return e.task === task
    })
    updateIdx = taskArr.findIndex((e) => {
        return e.task === task
    })
    console.log(updateIdx);
    form[0].value = taskList.task
    form[1].value = taskList.description
    form[2].value = taskList.category
}

const deleteTask = (index) => {
    taskArr.splice(index,1)
    ui()
}

const completeTask = (i) => {
    taskArr[i].completed = !taskArr[i].completed;
    ui()
}

