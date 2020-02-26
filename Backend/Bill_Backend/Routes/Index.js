const express = require('express');
const app = express.Router();
const bp = require('body-parser');

const act = require('../Controllers/Index');
const Action = new act();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

//Pulsa
app.post('/price_info', async(req,res) => {

    let data = req.body.data;

    if( data[1] === "pulsa" || data[1] === "data" ){

        if( data[0] === "" || data[0] === null || data[0] === undefined ){
            res.send( { respond : "noNomor" } );
        } else if( data[1] === "" || data[1] === null || data[1] === undefined ) {
            res.send( { respond : "noType" } );
        } else if( data[0] === "" || data[0] === null || data[0] === undefined && data[1] === "" || data[1] === null || data[1] === undefined ){
            res.send( { respond : ["noNomor","noType"] } );
        } else {
            res.send( await Action.requestPulsaPrice(data) )
        }

    } else if( data[1] === "pln" ){

        if( data[0] === "" || data[0] === null || data[0] === undefined ){
            res.send( { respond : "noNomor" } );
        } else if( data[1] === "" || data[1] === null || data[1] === undefined ) {
            res.send( { respond : "noType" } );
        } else if( data[0] === "" || data[0] === null || data[0] === undefined && data[1] === "" || data[1] === null || data[1] === undefined ){
            res.send( { respond : ["noNomor","noType"] } );
        } else {
            res.send( await Action.requestPlnPrice(data) )
        }

    }

});

app.get('/price_provider_tri', async (req,res) => {

    res.send( await Action.requestPulsaPriceDummy() )

});

module.exports = app;