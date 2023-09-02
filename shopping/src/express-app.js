const express = require('express');
const cors  = require('cors');
const { shopping  } = require('./api');
const morgan = require('morgan')

module.exports = async (app, channel) => {

    app.use(express.json());
    app.use(cors());
    app.use(morgan('dev'))
    app.use(express.static(__dirname + '/public'))

    //api
    // appEvents(app);
    
    shopping(app, channel);
    // error handling
    
}