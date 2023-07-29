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

/**
 * Get an specific transaction
 * @param {number} pk_transaction Transaction primary key
 * @returns {{pk_transaction: number , fk_user: number, description: string, amount: float}} User object Transaction schemas                              
 */
const getTransaction = async (pk_transaction) => {
    try {
      let transaction = await postgresql.public.one(`SELECT * FROM transactions WHERE pk_transaction = '${pk_transaction}'`);
      return (transaction);
    } catch (error) {
      console.error('Error al obtener la transaccion:', error.message);
      throw new Error(error.message);
    }
  };

module.exports = {
    createTransaction,
    getTransaction
}