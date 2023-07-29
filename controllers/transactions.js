const { status } = require('express/lib/response')
const transactions = require('../services/transactions')

const createTransaction = async (req, res, next) => {
    const { pk_transaction , fk_user, description, amount } = req.body
    try {
        let transaction = await transactions.createTransaction(pk_transaction , fk_user, description, amount);
        res.status(200).send(transaction);
        //next()
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500) && next(e);
    }
}


module.exports = {
    createTransaction
}