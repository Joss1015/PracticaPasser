const { postgresql } = require('../databases/postgresql')

/**
 * Create a new user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @param {boolean} status User status
 * @returns {{pk_user: number, name: string, status: boolean}} User object
 */
const createUser = (pk_user, name, status) => {
    try {
        const user = postgresql.public.one(`insert into users values ('${pk_user}', '${name}', '${status}') returning *;`);
        return (user);
    } catch (e) {
        throw new Error(e);
    }
}


/**
 * Update an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @param {boolean} status User status
 * @returns {{pk_user: number, name: string, status: boolean}}
 */
const updateUser = async (pk_user, name, status) => {
    try {
        await postgresql.public.none(`UPDATE users SET name = '${name}', status = '${status}' WHERE pk_user = '${pk_user}'`);
        
        //Obtener usuario actualizado
        let updatedUser = await getUser(pk_user);
        console.log('Usuario actualizado correctamente:', updatedUser);
        return (updatedUser);
    } catch (error) {
        console.error('Error al actualizar el usuario:', error.message);
        throw new Error(error.message);
    }
};


/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @returns {{pk_user: 1, name: "Juan"}} User schemas                              
 */
const getUser = async (pk_user) => {
    try {
      let user = await postgresql.public.one(`SELECT * FROM users WHERE pk_user = '${pk_user}'`);
      return (user);
    } catch (error) {
      console.error('Error al obtener el usuario:', error.message);
      throw new Error(error.message);
    }
  };
  

/**
 * Delete an specific user
 * @param {number} pk_user User primary key
 * @returns {pk_user: 1} User primary key
 */
const deleteUser = (pk_user) => {

    throw new Error('Method not implemented.');
}

module.exports = {
    createUser,
    getUser,
    updateUser
}