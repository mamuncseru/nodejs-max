const express = require('express');

const app = express();



app.use('/users', (req, res, next)=>{
    return res.send('<h1>send dummy response</h1>');
});

app.use('/', (req, res, next) => {
    console.log('log something in the console.')
    res.send('<h1>One Response</h1>');
});

app.listen(5000);