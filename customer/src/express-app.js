const express = require('express');
const cors  = require('cors');
const { customer,  } = require('./api');
const { CreateChannel } = require('./utils')
const morgan = require('morgan')

module.exports = async (app, channel) => {

    app.use(express.json());
    app.use(cors());
    app.use(morgan('dev'))
    app.use(express.static(__dirname + '/public'))

    //api
    // appEvents(app);
    
    customer(app, channel);
    // error handling
    
}