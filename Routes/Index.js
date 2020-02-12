const express = require('express');
const app = express.Router();

const controllers = require('../Controllers/Index');
const Action = new controllers();

app.post('/sent_balance', async (req,res) => {

    let no_rek_tujuan = req.body.no_rek_tujuan;
    let bank_penerima = req.body.bank_penerima;
    let nominal = req.body.nominal;
    let berita = req.body.berita;
    let kota = req.body.kota;

    let sentBalanceParam = {
        no_rek_tujuan : no_rek_tujuan,
        bank_penerima : bank_penerima,
        nominal : nominal,
        berita : berita,
        kota : kota
    };

    res.send( await Action.reqTransfer(sentBalanceParam) );

});

module.exports = app;