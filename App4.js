class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    
}

class Students extends Person {
    constructor(name,age,gpa){
        super(name,age);
        this.gpa=gpa;

    }
    hello(){
        console.log("Hello "+this.name);
    }

}

class Teachers extends Person{
    constructor(name,age,classSize){
        super(name,age);
        this.classSize=classSize;

    }
    hello(){
        console.log("Hello "+this.name);
    }


}
let st = new Students("JOB",23,2.5);
let tr = new Teachers("WANI",40,27);

tr.hello();
console.log(st.name);
