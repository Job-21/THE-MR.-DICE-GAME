let person ={
    name : "JOB",
    lname : "ANDREA",
    Age : 22,
    get fullName(){
        return `My full is ${person.name} ${person.lname} and my Age is ${person.Age}`;
    },
    set fullName(value){
        let arr = value.split(' ');
        this.name=arr[0];
        this.lname=arr[1];
    }
};
person.fullName ="JOBBY PLUTOZ";

console.log(person.fullName);