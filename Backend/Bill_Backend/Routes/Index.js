const express = require('express');
const app = express.Router();
const bp = require('body-parser');

const act = require('../Controllers/Index');
const Action = new act();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.post('/generate_token', async (req, res) => {

    let username = req.body.username;
    let password = req.body.password;
    let userData = { username : username, password : password };

    res.send( await Action.requestToken(userData) );

});

app.get('/get_all_list_product', async (req, res) => {

    let headers = req.get('Authorization');
    res.send( await Action.requestListProduct(headers) );

});

app.get('/get_detail_list_product/:id', async (req, res) => {

    let id = req.params.id;
    let headers = req.get('Authorization');
    let getDetailParam = { product_id : id, headers : headers };

    console.log(getDetailParam);
    res.send( await Action.requestDetailListProduct(getDetailParam) )
});

app.get('/get_list_product_sponsor/:id', async (req ,res) => {

    let id = req.params.id;
    let headers = req.get('Authorization');
    let getProductSponsorParam = { product_id : id, headers : headers };

    console.log(getProductSponsorParam);
    res.send( await Action.requestListSponsor(getProductSponsorParam) )
});

module.exports = app;