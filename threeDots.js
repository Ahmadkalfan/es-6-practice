const array1=[20,23,25,46];
const array2=[23,45,64,56];
//this is a tough way
// const add=array1.concat(array2).concat([8]);
//this is the easy way
const add=[...array1,...array2];
console.log(add);

const businessMan=230;
const sochib=233;
const politician=244;
const takapoisha=[230,233,244];
const borolox=Math.max(...takapoisha);
console.log(borolox);
