const sum =(num1,num2)=> num1+num2;

class humans{
    constructor(){
        console.log("I am a constructor of the humans class.");
    }
}
module.exports = {sum:sum,humans:humans};
//module.exports.humans = humans;