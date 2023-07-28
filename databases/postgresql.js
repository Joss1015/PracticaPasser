const { newDb } = require('pg-mem');

const postgresql = newDb();

// create mock data
postgresql.public.none(`create table users(pk_user integer, name text, status boolean);
                insert into users values (123, 'Juan', true);`);

postgresql.public.none(`create table transactions(pk_transaction integer, fk_user integer,  description text, amount float);
                insert into transactions values (1, 123, 'viaje', 500);`);
                
module.exports = {
    postgresql
}