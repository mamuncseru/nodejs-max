const express = require('express');
const userRoute = require('./routers/user');
const homeRoute = require('./routers/home');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(userRoute);
app.use(homeRoute);

app.listen(4000);

