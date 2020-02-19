const axios = require('axios');

class Get{

    async getListProduct(reqHeader){

        let hasilnya = await axios.get('https://sandbox.bisatopup.co.id/api/product/all',
        {
                headers: {
                    'Authorization': reqHeader
                }
        }).then(function (response) {
            return response.data;
        });

        return hasilnya;

    }

    async getDetailListProduct(param){
        let link = "https://sandbox.bisatopup.co.id/api/product/daftar/"+param.product_id;
        console.log(link);
        let hasilnya = await axios.get(link,
            {
                headers: {
                    'Authorization': param.headers
                }
            }).then(function (response) {
            return response.data;
        });

        return hasilnya;
    }

    async getProductSponsor(param){
        let link = "https://sandbox.bisatopup.co.id/api/product/detail/"+param.product_id;
        console.log(link);
        let hasilnya = await axios.get(link,
            {
                headers: {
                    'Authorization': param.headers
                }
            }).then(function (response) {
            return response.data;
        });

        return hasilnya;
    }

}

module.exports = Get;