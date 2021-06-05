const name='kalfan';
// name='balfan'; you cannot change the name var if you named it with const.
console.log(name);

//you can change the varibles if you write the variable using let
let name1='salman';
name1='kilfan';
console.log(name1);
//you can push and pop and change the element of an array if you put the name of the array using const but cannot change the whole array

const number=[20,23,25,26];
number.push(45);
console.log(number);
number[0]=222;
console.log(number);

//but you cannot change the whole array

// number=['kfal','irfan'];
// console.log(number);

//it is same for the object

//you cannot put the let variable outside a scope it will not work
for (let  i= 0;  i<10; i++) {
    const element = i;
    // console.log(element);
    
}
console.log(element);// this one will not work