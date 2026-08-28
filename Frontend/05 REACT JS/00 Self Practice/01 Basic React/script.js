// console.log('hello');
// console.log(document);
// console.log(React);


const root = document.querySelector('.root')
const x = React.createElement('h1', {class:'Testing'}, 'this is the virtual element by react')
const y = ReactDOM.createRoot(root)
y.render(x)

// ReactDOM.createRoot(document.querySelector('.root')).render(React.createElement('h2', {className:'testing'}, 'Mantu Kumar Tiwari'))


