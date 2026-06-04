// console.log('testing');
function first() {
    console.log('first');
    function second() {
        console.log('second');    
    }
    second()
    return 20
}
console.log(first());