const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config');


module.exports = async () => {
    try{
        const conn = await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected to MongoDB - '+conn.connection.host);
    }catch(e){
        console.error(e.message);
    }
};