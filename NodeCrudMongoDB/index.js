const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT ?? 3000);

const server = http.createServer(app);

// Set maxConnections if needed
server.maxConnections = 100; // Optional, only if you want to limit connections

// Handle 'listening' event
server.on('listening', () => {
    console.log('Listening on port ' + (process.env.PORT ?? 3000));
});

// Start listening on the port
server.listen(process.env.PORT ?? 3000);









// const express = require('express');

// const bodyParser = require('body-parser');

// const app = express();

// const port = 3000;

// app.use(bodyParser.json());

// let todos = [
//     {id:1,title:"todo 1"}, 
//     {id:2,title:"todo 2"}, 
//     {id:3,title:"todo 3"}
// ]

// app.get('/todos', (req , res) =>{
//     res.json(todos);
// })

// app.listen(port, () =>{
//     console.log(`Server running on port ${port}`)
// })