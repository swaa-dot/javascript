console.log("Spread object-----");//1.Spread object
const obj1 = { name: 'Dicoding' };
const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };
const newObj = { ...obj1, ...obj2 };
console.log(newObj);
//1.2
const ob = {id: 1};
const obj = {prodi: 1, inisial: 'A'};
const hobj = {...ob, ...obj};
console.log(hobj);
//1.3
const ori = {nilai: "ini asli"};
const fake = {...ori};
console.log(fake);
console.log("array + spread object-----");//2.array + spread object
const arr = [1,3,5];
const arr2 = [2, 4, 6];
const campur = {...arr, ...arr2};
console.log(campur);
//2,1 
const a = ['aku', 'kamu', 'dia'];
const b = [...a];
console.log(b);