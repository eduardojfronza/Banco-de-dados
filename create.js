const db = require('./database');

async function createTable() {
    try {
        await db.connect();
        
        // Aqui você pode executar a consulta para criar a tabela
        await db.query(`CREATE TABLE cadastro (
            cod_user SERIAL PRIMARY KEY,
            nome text NOT NULL,
            email text NOT NULL,
            senha text NOT NULL,
            data_nascimento date
        )`);

        console.log("Tabela criada com sucesso");
    } catch (error) {
        console.log("Erro!", error);
    } finally {
        await db.end();
    }
}

createTable();
