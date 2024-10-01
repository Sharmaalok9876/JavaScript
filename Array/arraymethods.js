let arr = [1,2,3,4,5];

arr.push(6);
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

arr.pop();
console.log(arr); // [ 1, 2, 3, 4, 5 ]

arr.shift();
console.log(arr); // [ 2, 3, 4, 5 ]

arr.unshift(9);
console.log(arr); // [ 9, 2, 3, 4, 5 ]

let a1 = [1,2,3,4,5];
let a2 = [3,4,5];
let a3 = a1.concat(a2)

console.log(a1,a2,a3);

let s = a3.join("@");
console.log(s);

a3.reverse();
console.log(a3);

console.log(a3.indexOf(4));

let arr1 = [1,2,3,4,5,6];
console.log(arr1.slice(1,3)); // [ 2, 3 ]

arr1.splice(2, 0, 11);
console.log(arr1); //[1, 2, 11, 3, 4, 5,  6]








