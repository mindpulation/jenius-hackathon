const express = require('express');
const app = express.Router();
const bp = require('body-parser');

const act = require('../Controllers/Index');
const Action = new act();

const key = require('../Controllers/Key');
const Key = new key();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

//Pulsa
app.post('/price_provider', async(req,res) => {

    let nomor = req.body.nomor;
    let type = req.body.type;
    let param = { nomor  : nomor, type : type };

    res.send( Action.requestPulsaPrice(param) )

});

app.get('/price_provider_tri', async (req,res) => {

    res.send( await Action.requestPulsaPriceDummy() )

});

module.exports = app;