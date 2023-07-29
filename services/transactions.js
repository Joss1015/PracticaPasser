const usersModel = require('../models/transactions')

/**
 * Create a new transaction
 * @param {number} pk_transaction Transaction primary key
 * @param {number} fk_user User foreign key
 * @param {string} description Transaction description
 * @param {float} amount Transaction amount
 * @returns {{pk_transaction: number , fk_user: number, description: string, amount: float}} User object
 */
const createTransaction = async (pk_transaction , fk_user, description, amount) => {
    try {
        return usersModel.createTransaction(pk_transaction , fk_user, description, amount)
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    createTransaction
}