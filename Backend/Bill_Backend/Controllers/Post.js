const axios = require('axios');
const key = require('./Key');
const Key = new key();

class Post{

    async getToken(userData){

        let hasilnya = axios.post('https://sandbox.bisatopup.co.id/api/auth/token', {
            username : userData.username,
            password : userData.password
        }).then( response => {
            this.hasilGetToToken = response.data.token;
            console.log(this.hasilGetToToken);
            return this.hasilGetToToken;
        });

        return await hasilnya;

    }

    async payPDAM(param){

        let hasilnya = axios.post('')

    }

    async pulsaPrice(param){

        let hasilnya;
        console.log(param);
        let getPrefix = Number(param.nomor.substring(1, 4));
        console.log("Prefixnya : ", getPrefix);

        let indosat = [814,815,816,855,856,857,858];
        let xl = [817,818,819,859,878,877];
        let axis = [838,837,831,832];
        let telkomsel = [812,813,852,853,821,823,822,851];
        let smartfren = [881,882,883,884,885,886,887,888];
        let three = [895,896,897,898,899];

        let checkPrefix = async () => {

            for(let isiArray = 0; isiArray <= 37; isiArray++){

                for( let threes =  0; threes <= 4; threes++){
                    if( three[threes] === getPrefix ){
                        return "three";
                    }
                }

                for( let smartfrens =  0; smartfrens <= 7; smartfrens++){
                    if( smartfren[smartfrens] === getPrefix ){
                        return "smartfren";
                    }
                }

                for( let telkomsels =  0; telkomsels <= 7; telkomsels++){
                    if( telkomsel[telkomsels] === getPrefix ){
                        return "telkomsel";
                    }
                }

                for( let axiss =  0; axiss <= 3; axiss++){
                    if( axis[axiss] === getPrefix ){
                        return "axis";
                    }
                }

                for( let xls =  0; xls <= 5; xls++){
                    if( xl[xls] === getPrefix ){
                        return "xl";
                    }
                }

                for( let indosats =  0; indosats <= 5; indosats++){
                    if( indosat[indosats] === getPrefix ){
                        return "indosat";
                    }
                }

            }
        };

        console.log( "Providernya : ",await checkPrefix());

        hasilnya = (async function () {
            if( await checkPrefix() === "indosat" ){

                let keys = await Key.getInqProdSign(param.type);
                console.log(keys);

                let data;
                if( param.type === "pulsa" ){

                    data = await axios.post(`https://api.mobilepulsa.net/v1/legacy/index/${param.type}/indosat`, {
                        commands: "pricelist",
                        username: keys.username,
                        sign: keys.sign,
                        status: "active"
                    });

                } else if(param.type === "data") {

                    data = await axios.post(`https://api.mobilepulsa.net/v1/legacy/index/${param.type}/indosat_paket_internet`, {
                        commands: "pricelist",
                        username: keys.username,
                        sign: keys.sign,
                        status: "active"
                    });

                }
                hasilnya = data.data;
                console.log(data.data);
                return data.data;

            } else if( await checkPrefix() === "xl" ){

                let keys = await Key.getInqProdSign(param.type);

                let data;
                if( param.type === "pulsa" ){

                    data = await axios.post(`https://api.mobilepulsa.net/v1/legacy/index/${param.type}/xl`, {
                        commands: "pricelist",
                        username: keys.username,
                        sign: keys.sign,
                        status: "active"
                    });

                } else if(param.type === "data") {

                    data = await axios.post(`https://api.mobilepulsa.net/v1/legacy/index/${param.type}/xl_paket_internet`, {
                        commands: "pricelist",
                        username: keys.username,
                        sign: keys.sign,
                        status: "active"
                    });

                }

                hasilnya = data.data;
                console.log(data.data);
                return data.data;

            } else if(await checkPrefix() === "axis" ){

                let keys = await Key.getInqProdSign(param.type);

                let data;
                if( param.type === "pulsa" ){

                    data = await axios.post(`https://api.mobilepulsa.net/v1/legacy/index/${param.type}/axis`, {
                        commands: "pricelist",
                        username: keys.username,
                        sign: keys.sign,
                        status: "active"
                    });

                } else if(param.type === "data") {

                    data = await axios.post(`https://api.mobilepulsa.net/v1/legacy/index/${param.type}/axis_paket_internet`, {
                        commands: "pricelist",
                        username: keys.username,
                        sign: keys.sign,
                        status: "active"
                    });

                }

                hasilnya = data.data;
                console.log(data.data);
                return data.data;

            } else if(await checkPrefix() === "telkomsel" ){

                let keys = await Key.getInqProdSign(param.type);

                let data;
                if( param.type === "pulsa" ){

                    data = await axios.post(`https://api.mobilepulsa.net/v1/legacy/index/${param.type}/telkomsel`, {
                        commands: "pricelist",
                        username: keys.username,
                        sign: keys.sign,
                        status: "active"
                    });

                } else if(param.type === "data") {

                    data = await axios.post(`https://api.mobilepulsa.net/v1/legacy/index/${param.type}/telkomsel_paket_internet`, {
                        commands: "pricelist",
                        username: keys.username,
                        sign: keys.sign,
                        status: "active"
                    });

                }

                hasilnya = data.data;
                console.log(data.data);
                return data.data;

            } else if(await checkPrefix() === "smartfren" ){

                let keys = await Key.getInqProdSign(param.type);

                let data;
                if( param.type === "pulsa" ){

                    data = await axios.post(`https://api.mobilepulsa.net/v1/legacy/index/${param.type}/smartfren`, {
                        commands: "pricelist",
                        username: keys.username,
                        sign: keys.sign,
                        status: "active"
                    });

                } else if(param.type === "data") {

                    data = await axios.post(`https://api.mobilepulsa.net/v1/legacy/index/${param.type}/smartfren_paket_internet`, {
                        commands: "pricelist",
                        username: keys.username,
                        sign: keys.sign,
                        status: "active"
                    });

                }

                hasilnya = data.data;
                console.log(data.data);
                return data.data;

            } else if(await checkPrefix() === "three" ){

                let keys = await Key.getInqProdSign(param.type);

                let data;
                if( param.type === "pulsa" ){

                    data = await axios.post(`https://api.mobilepulsa.net/v1/legacy/index/${param.type}/three`, {
                        commands: "pricelist",
                        username: keys.username,
                        sign: keys.sign,
                        status: "active"
                    });

                } else if(param.type === "data") {

                    data = await axios.post(`https://api.mobilepulsa.net/v1/legacy/index/${param.type}/tri_paket_internet`, {
                        commands: "pricelist",
                        username: keys.username,
                        sign: keys.sign,
                        status: "active"
                    });

                }

                hasilnya = data.data;
                console.log(data.data);
                return data.data;

            }
        })();

        console.log( await hasilnya, "Ini Hasilnya");
        return await hasilnya;

    }

    async pulsaPriceDummy(){
        let keys = await Key.getInqProdSign("data");
        let datas = await axios.post(`https://api.mobilepulsa.net/v1/legacy/index/pulsa/three`, {
            commands: "pricelist",
            username: keys.username,
            sign: keys.sign,
            status: "active"
        });
        console.log(datas.data);
        return datas.data;
    }

}

module.exports = Post;