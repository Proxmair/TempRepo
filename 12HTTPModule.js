//HTTP Module

/*
it is used to create a server and setup the api
*/ 

const http=require('http');
//req request
//res response
const server=http.createServer((req,res)=>{
    console.log(req);
    if(req.url==='/'){
        res.end('This is the Home page');
    }
    else if(req.url==='/about'){
        res.end('This is the about page');
    }
    else{
        res.end(`<h1>Sorry cant find your page</h1>
        <a href="/">Back to Home</a>`);
    }
})

server.listen(5000);