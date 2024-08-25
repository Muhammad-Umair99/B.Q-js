//Question 1
// function sum(a,b){
//     let res = a + b;
//     return res;
// }
// let val = sum (5,7);
// console.log(val);

// Qustion 2
// let sum = (a,b)=>{
//     let res = a + b;
//     return res;
// }
// let val = sum (5,7);
// console.log(val);


//var sum = (a,b) => res = a + b
//var val = sum (5,7);
//console.log(val);


// let checkNumber = (n)=>{
//     if(n % 2 ===0 ){
//         return true;
//     }
//     else{
//         return false
//     }
// }
// let res = checkNumber(6)
// console.log(res);

// var reinilization kar sakte he
//let me reinilization nhi kar sakte


// let checkNumber = (n)=>{
//     if(n % 2 ===0 ){
//        console.log("this is even number");
//     }
//     else{
//         console.log("this is odd number");
//     }
// }
// let res = checkNumber(5)
// console.log(res);

//question 3)
// let maxNumber = (a,b,c) =>{
//     if(a>b & a>c ){
//         console.log("a is greater number");
        
//     }
//      else if(b>a & b>c){
//         console.log("b is greater");
//     }
//     else{
//         console.log("c is greater");
//     }
// }
// maxNumber(10,5,2);

//Q4)
// let reverse = (arr) => {
//     let revarr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         revarr.push(arr[i]);
//     }
//     return revarr;
// }

// let res = reverse([1, 2, 3, 4, 5]);
// console.log(res);


// /Q5)
// function factorial(n) {
//     if (n < 0) {
//         return 'Factorial is not defined for negative numbers';
//     }
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(-1));


//RECURSION (FUNCTION K ANDAR FUNCTON KO CALL KARNA)
// const factorial = (n) => {
//     if (n < 0) {
//         return 'Factorial is not defined for negative numbers';
//     }
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }


// console.log(factorial(-5)); 