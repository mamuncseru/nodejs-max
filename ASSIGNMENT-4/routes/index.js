const express = require('express');
const path = require('path');
const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    // res.send('<form><label>Name</label><input type="text" /></form>');
    res.render('home', {pageTitle: 'Home'});
});

router.post('/', (req, res, next) => {
    users.push({ name: req.body.name });
    res.redirect('/users');
});

router.get('/users',(req, res, next) => {
    res.render('user', { users: users, pageTitle: 'Users' });
});

module.exports = router;