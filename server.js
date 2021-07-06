const express = require('express');
const dotenv = require('dotenv'); 
//const path = require('path/posix');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const path=require('path');

const connectDB=require('./server/database/connection')

const app= express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT ||8080

//log request

app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse request bodyparser

app.use(bodyparser.urlencoded({extended:true}));

//set view engin
app.set("views engin", "ejs")

//load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))


//load routers
app.use('/',require('./server/routs/router.js'))

app.listen(PORT,()=>{console.log('server is  running on http://localhost:3000')});