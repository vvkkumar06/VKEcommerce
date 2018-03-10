/************* Module Imports *****************/
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
/*--------------------------------------*/

/**************Variables and file imports**********/
const app = express();
/*----------------------------------------------*/

/*************Middlewares***************************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(cors());
/*-----------------------------------------*/

/*********Routers***************************/
app.get('/', (req,res,next)=>{
    res.json({
        user: "Vivek Kumar"
    });
});




app.listen(3030, err=>{
    if(err)
        console.log("Error running server!");
    else
        console.log("Server running successfully!");
});