const db = require('./database');

async function dropTable(){
    try{
        await db.connect()
        await db.query(`DROP TABLE cadastro CASCADE`)

        console.log("Tabelas Removidas")
    } catch (error){
        console.log("Erro!");
    } finally{
        await db.end()
    }
}

dropTable()