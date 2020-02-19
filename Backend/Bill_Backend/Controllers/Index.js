
const get = require('./Get');
const Get = new get();

const post = require('./Post');
const Post = new post();

class IndexControllers{

    requestToken(userData){
        return Post.getToken(userData);
    }

    requestListProduct(reqHeader){
        return Get.getListProduct(reqHeader)
    }

    requestDetailListProduct(param){
        return Get.getDetailListProduct(param);
    }

    requestListSponsor(param){
        return Get.getProductSponsor(param);
    }

}

module.exports = IndexControllers;