const express = require('express');
const app = express.Router();

const bp = require('body-parser');

const controllers = require('../Controllers/Index');
const Action = new controllers();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.post('/sent_balance', async (req,res) => {

    let no_rek_tujuan = req.body.no_rek_tujuan;
    let bank_penerima = req.body.bank_penerima;
    let nominal = req.body.nominal;
    let berita = req.body.berita;
    let kota = req.body.kota;

    let sentBalanceParam = {
        account_number : no_rek_tujuan,
        bank_code : bank_penerima,
        amount : nominal,
        remark : berita,
        recipient_city : kota
    };

    console.log(sentBalanceParam);

    res.send( await Action.reqTransfer(sentBalanceParam) );

});

app.post('/test', async (req, res) => {
   let data = req.body.data;
   res.send( { data : data } )
});

app.get('/get', async( req, res ) => {
    res.send({ status:"Sip" })
});

module.exports = app;