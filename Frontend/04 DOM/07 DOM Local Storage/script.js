localStorage.setItem('name', 'Mantu')
const lsd = localStorage.getItem('name')
console.log(lsd);

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

localStorage.setItem("testData", JSON.stringify(data))
const getData = localStorage.getItem('testData')
const reverse = JSON.parse(getData)
console.log(reverse);
reverse.forEach((e) => {
    console.log(e.name);
})
localStorage.removeItem('name')
