const express = require('express');


const bodyParser = require('body-parser');

const config = require('../config.js');

const deliveries = require('./components/carsDeliveries/network');
const cors = require('cors');

const errors = require('../network/errors');

const app = express();


app.use(bodyParser.json());

// ROUtER
app.use(cors()); 

app.use('/api/deliveries', deliveries);



app.use(errors);

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});