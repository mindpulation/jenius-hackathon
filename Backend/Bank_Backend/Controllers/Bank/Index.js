const axios = require('axios');
const request = require('request');
const crypto = require('crypto-js');
const https = require('follow-redirects').https;
const fs = require('fs');
const qs = require('querystring');


class Bank {

    async reqTransferToFlip( transferParam ){

        console.log(transferParam.account_number.toString(), "Final");
        console.log(transferParam.bank_code.toString(), "Final");
        console.log(transferParam.amount.toString(), "Final");
        console.log(transferParam.remark.toString(), "Final");
        console.log(transferParam.recipient_city.toString(), "Final");

        var options = {
            'method' : 'POST',
            'hostname' : 'sandbox.flip.id',
            'path' : '/api/v2/disbursement',
            'headers' : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            'maxRedirects' : 20
        };

        var req = https.request(options, function (res) {

            var chunks = [];

            res.on("data", function (chunk) {
                chunk.push(chunk);
            });

            res.on("end", function (chunk) {
                var body = Buffer.concat(chunks);
                console.log(body.toString());
            });

            res.on("error", function (error) {
                console.error(error);
            });

            let postData = qs.stringify({
               'account_number' : transferParam.account_number.toString(),
                'bank_code' :   transferParam.bank_code.toString(),
                'amount' : transferParam.amount.toString(),
                'remark' : transferParam.remark.toString(),
                'recipient_city' : transferParam.recipient_city.toString()
            });

            console.log(postData);
            req.write(postData);
            req.end();

        })

    }

}

module.exports = Bank;