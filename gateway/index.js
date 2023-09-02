// require express
const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy')
const path = require('path');
const app = express();

const dir = path.join(__dirname).split('\\');
const Microservice = dir[dir.length-1];

app.use(express.json());
app.use(cors());


app.use('/customer', proxy('http://localhost:8081'))
app.use('/shopping', proxy('http://localhost:8083'))
app.use('/', proxy('http://localhost:8082'))


app.listen(8080, () => {
    console.log(`${Microservice} microservice listening on port 8080!`);
});