const dotenv = require('dotenv');
const path = require('path');

if(process.env.NODE_ENV !== 'production'){
    const configFile = path.join(__dirname, "config.env");
    dotenv.config({path: configFile});
}else{
    dotenv.config()
}

module.exports = {
    PORT : process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    APP_SECRET: process.env.APP_SECRET,
    MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
    EXCHANGE_NAME: 'ONLINE_SHOPPING',
    SHOPPING_BINDING_KEY: 'SHOPPING_SERVICE',
    CUSTOMER_BINDING_KEY: 'CUSTOMER_SERVICE',
    QUEUE_NAME: 'SHOPPING_QUEUE'
}