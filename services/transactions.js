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

/**
 * Get an especific transaction
 * @param {number} pk_transaction User id
 * @returns {{pk_transaction: number , fk_user: number, description: string, amount: float}} User object Transaction schemas                              
 */
const getTransaction = async (pk_transaction) => {
    try {
        return await usersModel.getTransaction(pk_transaction)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Update an specific transaction
 * @param {number} pk_transaction Transaction primary key
 * @param {number} fk_user User foreign key
 * @param {string} description Transaction description
 * @param {float} amount Transaction amount
 * @returns {{pk_transaction: number , fk_user: number, description: string, amount: float}} Transaction object
 */
const updateTransaction = async (pk_transaction, fk_user, description, amount) => {
    try {
        return await usersModel.updateTransaction(pk_transaction  , fk_user, description, amount);
    } catch (e) {
        throw new Error(e.message);
    }
}

/**
 * Get all transaction with fk_user
 * @param {number} fk_user User foreign key
 * @returns {{pk_transaction: number , fk_user: number, description: string, amount: float}} Transaction object                              
 */
const getAllTransaction = async (fk_user) => {
    try {
        return await usersModel.getAllTransaction(fk_user)
    } catch (e) {
        throw new Error(e.message)
    }
}


module.exports = {
    createTransaction,
    getTransaction,
    updateTransaction,
    getAllTransaction
}