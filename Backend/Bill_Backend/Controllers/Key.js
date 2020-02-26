const md5 = require('md5');

class Key{

    async getInqProdSign(type){
        console.log(type);
        if(type === "pulsa" || type === "data"){

            let ref_id = type + new Date().getTime();
            let sign = await md5("085601035011"+"5125e4f88dc99e90512"+"pl");
            let hasilnya = { username : "085601035011", ref_id : ref_id, sign : sign };
            return hasilnya;

        } else if( type === "pln" ){

            let ref_id = type + new Date().getTime();
            let sign = await md5("085601035011"+"5125e4f88dc99e90512"+ref_id);
            let hasilnya = { username : "085601035011", ref_id : ref_id, sign : sign };

            return hasilnya;

        }

    }

    async getInqDevSign(type){

        let date = new Date().getTime();
        let sign = await md5("085601035011"+"6125e4f87d9e0cd3"+type+date);
        let hasilnya = { username : "085601035011", ref_id : type+date, sign : sign };
        return hasilnya;

    }

}

module.exports = Key;