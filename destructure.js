const info={name:'ahmad kalfan',id:23,gfNmae:'naibal',job:'software engineer'};
const {name,gfNmae,id}=info;
// console.log(name,id,gfNmae);

const array1=['salman','sharukh','hritthik','hudai'];
const [first,...remainingActor]=array1;
console.log(remainingActor);

const complexObject={
    name:'sharukh',
   info: {
        id:23,
        address :'chatteshwari road'
    }
}
const {address}=complexObject.info;
console.log(address);
