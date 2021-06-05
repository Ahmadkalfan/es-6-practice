class Parent{
    constructor(parent) {
         this.fatherName='Ahmad';
    }
}
class Child extends Parent{
    constructor(name) {
         super();
         this.name=name;
    }
    getFullName(){
        return this.name+ " " +this.fatherName;
    }
}
const baby1=new Child('kalfan');
const baby2=new Child('irfan');
console.log(baby1.getFullName());
console.log(baby2.getFullName());