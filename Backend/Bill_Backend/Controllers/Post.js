const axios = require('axios');

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

}

module.exports = Post;