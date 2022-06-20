function divide(a,b){
    return new Promise((resolve, reject)=>{
        if(b===0){
            reject("can not divide by zero.");
            return;
        }
        resolve(a/b);
    });
}

divide(10,0).then((result)=>{
    console.log(`the result is : ${result} `);
}).catch(function(error){
    console.log(error);
});