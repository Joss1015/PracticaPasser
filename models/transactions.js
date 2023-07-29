const { postgresql } = require('../databases/postgresql')

/**
 * Create a new transaction
 * @param {number} pk_transaction Transaction primary key
 * @param {number} fk_user User foreign key
 * @param {string} description Transaction description
 * @param {float} amount Transaction amount
 * @returns {{pk_transaction: number , fk_user: number, description: string, amount: float}} User object
 */
const createTransaction = (pk_transaction , fk_user, description, amount) => {
    try {
        const transaction = postgresql.public.one(`insert into transactions values ('${pk_transaction}', '${fk_user}', '${description}','${amount}') returning *;`);
        return (transaction);
    } catch (e) {
        throw new Error(e);
    }
}

module.exports = {
    createTransaction
}