// ************************************* 1. Array

// ### Intermediate Create an array of 5 favorite movies and print all values.
var movie = ['Money Heist', 'Berlin', 'Pushpa', 'KGF', 'Bahubali']
for (let i=0; i<movie.length; i++){
    console.log(movie[i]);
}

// ### Hard Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.
var mixedArr = [23,'Hello', true, [11,22,33,44]]
console.log(mixedArr[3]);


// ************************************* 2. Indexing in Array

// ### Intermediate Print the first and last element of an array.
var x = [29,93,10,98,26]
console.log(`The first element is: ${x[0]} and the last Element is: ${x[x.length-1]} `);

// ### Hard Swap the second and second-last element using indexing.
var y = [234,45,567,523,737,39]
var temp = y[1]
y[1] = y[y.length-2]
y[y.length-2] = temp
console.log(y);


// ************************************* 3. Multi-Dimensional Arrays

// ### Intermediate Create a 2D array and print all first elements of inner arrays.
var multiArr = [
    [10,20,30,40],
    [11,22,33,44],
    [12,23,34,45]
]
for (let i=0; i<3; i++){
    console.log(multiArr[i][0]);
}

// ### Hard Find the sum of all diagonal elements in a 3x3 matrix.
var sqArr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
var diaSum = 0;
for (var i=0; i<3; i++){
    diaSum += sqArr[i][i]
}
console.log('Diagonal sum is:',diaSum);


// ************************************* 4. length

// ### Intermediate Find total elements in an array without counting manually.
var lenArr = [12,54,36,92,38,49,73]
console.log('count of Array:', lenArr.length);

// ### Hard Create a function that checks whether array length is even or odd.
function isEven(a) {
    if (a%2 == 0){
        return 'Even'
    }else{
        return 'Odd'
    }
}
var z = [34,654,322,6,345,456]
console.log('length of array is: ',isEven(z.length));


// ************************************* 5. push()

// ### Intermediate Add 3 new elements at the end of array.
var pu = [2,5,7,35,3,22]
console.log('element before push',pu);
pu.push(93)
pu.push(23)
pu.push(99)
console.log('element after push',pu);

// ### Hard Add elements dynamically inside loop from another array.
var arr1 = [34,65,437,93,84]
var arr2 = [1,2,3,4,5]
for (let i=0; i<arr2.length; i++){
    arr1.push(arr2[i])
}
console.log(arr1);


// ************************************* 6. pop()

// ### Intermediate Remove last element and print removed value.
var rem = [3,5,6,78,9,76]
console.log('this is the removed element',rem.pop());
console.log('array after removed element',rem);

// ### Hard Keep removing elements until array becomes empty.
var emp = [1,2,3,4,5,6,7,8]
while(emp.length>0){
    emp.pop()
    console.log(emp);
}


// ************************************* 7. unshift()

// ### Intermediate Add one username at beginning of array.
var uname = ['Roman', 'Sarthak', 'Nitin', 'Shubham']
uname.unshift('Mantu')
console.log('Adding one username at the begining',uname);

// ### Hard Insert multiple elements at beginning without replacing existing ones.
var mulElement = [10,20,30,40,50]
mulElement.unshift(5)
mulElement.unshift(4)
mulElement.unshift(3)
mulElement.unshift(2)
mulElement.unshift(1)
console.log(mulElement);


// ************************************* 8. shift()

// ### Intermediate Remove first element from array.
var rem1 = [12,23,34,45,56,67,546]
rem1.shift()
console.log(rem1);

// ### Hard Remove first element repeatedly until only 2 elements remain.
var sh = [12,34,56,23,6,434,23]
while (sh.length>2){
    sh.shift()
    console.log(sh);
}


// ************************************* 9. splice()

// ### Intermediate Remove 2 elements from middle of array.
var sp1 = [1,2,3,4,5,6]
sp1.splice(2,2)
console.log(sp1);

// ### Hard Replace 3 middle elements with 5 new values.
var sp2 = [10,20,30,40,50]
sp2.splice(1,3,1,2,3,4,5)
console.log(sp2);


// ************************************* 10. reverse()

// ### Intermediate Reverse an array using method.
var rev = [11,22,33,44,55]
console.log(rev.reverse());

// ### Hard Reverse only first half of array.
var revHalf = [10,20,30,40,50,60]
var st = 0
var end = Math.ceil(revHalf.length /2 -1)
while (st < end){
    var temp = revHalf[st]
    revHalf[st] = revHalf[end]
    revHalf[end] = temp
    st++
    end --
}
console.log(revHalf);


// ************************************* 11. sort()

// ### Intermediate Sort numbers in ascending order.
var sot = [39,84,26,53,69,255,74,21,54]
console.log(sot.sort((a,b) => a-b));

// ### Hard Sort array so even numbers come first and odd later.
var cusSot = [45,43,65,24,564,342,46,11,196]
console.log(cusSot.sort((a,b) => (a%2) - (b%2)));


// ************************************* 12. slice()

// ### Intermediate Extract first 4 elements into new array.
var sl = [10,20,30,40,1,2,3,4]
var newsl = sl.slice(0,4)
console.log('Extract first 4 elements',newsl);

// ### Hard Create a copy excluding first and last element.
var ele = [23,11,22,33,44,65]
var copy = ele.slice(1, ele.length-1)
console.log('excluding first and last element',copy);


// ************************************* 13. concat()

// ### Intermediate Merge two arrays.
var p1 = [1,2,3,4]
var p2 = [10,20,30,40]
console.log('Merging two array',p1.concat(p2));

// ### Hard Merge 3 arrays and remove duplicate values.
var q1 = [1,2,3,4]
var q2 = [3,4,5,6]
var q3 = [5,6,7,8]
var q1q2 = q1.concat(q2)
var qAll = q1q2.concat(q3)
var dup = []
for (let i=0; i<qAll.length; i++){
    if(!dup.includes(qAll[i])){
        dup.push(qAll[i])
    }
}
console.log('remove duplicate values',dup);


// ************************************* 14. includes()

// ### Intermediate Check whether `"apple"` exists in array.
var fruits = ['Mango', 'Guava', 'Apple', 'Banana']
if(fruits.includes('Apple')){
    console.log('Yes it Exist');
}else{
    console.log('No it does not exist');
}

// ### Hard Check if all elements of one array exist inside another.
var co = [1,53,3]
var coMain = [1,2,3,4,5,6,7]
var allExist = true
for (let i=0; i<co.length; i++){
    if(!coMain.includes(co[i])){
        allExist = false
        break
    }
}
console.log(allExist);


// ************************************* 15. indexOf()

// ### Intermediate Find index of `"Rahul"` in array.
var naam = ['Mantu', 'Rahul','Sunil', 'Nitin']
console.log(naam.indexOf('Rahul'));

// ### Hard Find all positions of repeated number `5`.
var n = [2,5,3,5,7,8,2,5]
var ind = []
for (let i=0; i<n.length; i++){
    if (n[i] === 5){
        ind.push(i)
    }
}
console.log(ind);


// ************************************* 16. join()

// ### Intermediate Convert array into comma separated string.
var comma = ['sunday', 'Monday', "Tuesday"]
console.log(comma.join(','))

// ### Hard Convert array into sentence format.
var sent = ['Hello', 'Today', 'i', 'am', 'practising', 'JavaScript']
console.log(sent.join(' '));


// ************************************* 17. for loop

// ### Intermediate Print all array elements using loop.
var prnt = ['Berlin', 'Tokoyo', 'Moscow', 'Itly']
for (let i=0; i<prnt.length; i++){
    console.log(prnt[i]);
}

// ### Hard Print elements at only even indexes.
var ei = [1,2,3,4,5,6,7,8,9]
for (let i=0; i<ei.length; i+=2){
    console.log('Element at even index',ei[i]);
}


// ************************************* 18. for...of

// ### Intermediate Print all values using `for...of`.
var val = [32,643,2,6,56,2,73,83,9,67]
for (let value of val){
    console.log(value);
}

// ### Hard Count vowels from array of characters.
var char = ['s','e','r','u','w','h','o']
countVowel = 0
for (let vow of char){
    if(vow=='a' || vow=='e' || vow=='i' || vow=='o' || vow=='u'){
        countVowel++
    }
}
console.log('total vowel is: ',countVowel);


// *************************************  19. Reference Behaviour of Array

// ### Intermediate Assign one array to another variable and modify second one.
var orgArray = [11,22,33,44,55]
var dupArray = orgArray
console.log(dupArray);
console.log(orgArray);
dupArray.push(5)
console.log(dupArray);
console.log(orgArray);

// ### Hard Create true copy so original array does not change.
var truCopy = [10,20,30,40,50]
var secCopy = [...truCopy]
secCopy.push(233)
console.log(secCopy);
console.log(truCopy);


// *************************************  20. Spread Operator

// ### Intermediate Copy array into new array.
var mainArr = [1,2,3,4,5]
var copyArr = [...mainArr]

// ### Hard Merge arrays and add extra values in between.
var d1 = [10,20,30]
var d2 = [1,2,3]
d1.push('extra')
console.log(d1.concat(d2));
