let http = require('http');
let server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write('Welcome to the home page.');
        res.end();
    }
    else if(req.url=='/cart.html'){
        res.write('you are in the carts page.')
        res.end();
    }
    else{
        res.write(`<h1>The page you are looking for does not exist.</h1>
        <a href="#">click here</a> <button style="background-color:red;">btn</button>`);
        res.end();
    }
});
server.listen(1000);