const express = require('express');
const routes = require('./routes');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(5000);