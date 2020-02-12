
const bp = require('body-parser');
const express = require('express');
const app = new express();

const routes = require('./Routes/Index');

app.use('/', routes);
app.use(bp.json());

app.listen(2000, (err) => {

    if(err){ console.log("Error Starting Microservices") }

    app.post('*', async( req, res ) => { res.send({ status: "OK" }) });
    app.put('*', async( req, res ) => { res.send({ status: "OK" }) });
    app.delete('*', async( req, res ) => { res.send({ status: "OK" }) });
    app.get('*', async( req, res ) => { res.send({ status: "OK" }) });

    console.log(" Microservices Successfuly Running At http://localhost:4000 ");

});