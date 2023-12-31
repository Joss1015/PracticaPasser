const express = require('express')

const { users, transactions } = require('../controllers')

const router = express.Router()

router.get('/users/:pk_user', users.getUser)
      .post('/users/', users.createUser)
      .put('/users/:pk_user',users.updateUser)
      .delete('/users/:pk_user',users.deleteUser)
      //Transactions
      .post('/transactions/',transactions.createTransaction)
      .get('/transactions/:pk_transaction',transactions.getTransaction)
      .put('/transactions/:pk_transaction',transactions.updateTransaction)
      .get('/transactions',transactions.getAllTransaction)
module.exports = router