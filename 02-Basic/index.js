const http =  require('http');
const fs = require('fs');


//console.log(http);

require('./config');



//Sync
console.log('Started Sync read!!!');
const dataSync = fs.readFileSync('./sample.txt');
console.log('Finished Sync read');


//Async
// const dataAsync = fs.readFile('./sample.txt', (err,data) => {
//     console.log('Finished Async read');
// })
// console.log('Started Async read!!!');



const server  = http.createServer((req, res) => {
    
    const url  = req.url;
    const method = req.method;

    console.log('method',method);


    console.log('url', url)



    if (url == '/login')
        res.write('<h1>This is login page</h1>')
    else
        res.write('this is just root')
    res.end();
});

server.listen(process.env.PORT);