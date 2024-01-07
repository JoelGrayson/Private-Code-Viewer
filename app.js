//# Setup
const express=require('express');
const app=express();
const port=process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const users=require('./users.js');

// Compress responses
const compression=require('compression');
app.use(compression());

// ## Static files
app.use(express.static('public'));


app.get('*', (req, res)=>{
    const { username, password }=req.query;
    const url=req.url.split('?')[0].slice(1);
    if (users.has(username) && users.get(username)===password) {
        res.render('index', {
            url,
            username,
            password,
            loggedIn: true,
            errorMessage: false
        });
    }
    else if (users.has(username)) {
        res.render('index', {
            url,
            loggedIn: false,
            errorMessage: 'Incorrect password'
        });
    } else {
        res.render('index', {
            url,
            loggedIn: false,
            errorMessage: false
        });
    }
});


app.listen(port, ()=>console.log(`Listening on port ${port}`));

