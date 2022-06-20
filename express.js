const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("hello world");
})
app.listen(2121,(req,res)=>{
    console.log("Hello jobby");
});