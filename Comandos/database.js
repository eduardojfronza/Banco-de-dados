const pg = require('pg');

const client = new pg.Client({
    user:'Eduardo',
    host:'localhost',
    database:'Formulario',
    password:'12345',
    port: 5432,
})

module.exports = client