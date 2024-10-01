const express = require('express');

const app = express();

const loggerMiddleware = (req,resp,next)=>{
    const currentTimestamp = new Date().toISOString();
    console.log(`[${currentTimestamp}] ${req.method} ${req.url}`);
    next()
}

app.use(loggerMiddleware)

app.get('/',(req,resp)=>{
    resp.send('hello,world')
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})