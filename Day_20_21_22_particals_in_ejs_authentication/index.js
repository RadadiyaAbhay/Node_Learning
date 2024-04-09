const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
const routes = require('./routes/index')

app.set('view engine' , 'ejs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(cookieParser());
app.use('/',routes)
app.use(express.static('public'))
app.use(express.static('uploads'))

app.listen(port , () =>{
    console.log("Server is running on port " + port);
})