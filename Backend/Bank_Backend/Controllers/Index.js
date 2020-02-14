const Bank = require('./Bank/Index');
const Action = new Bank();

class Controllers{

    async reqTransfer( sentParam ){
        console.log(sentParam);
        return Action.reqTransferToFlip(sentParam);
    }

}

module.exports = Controllers;