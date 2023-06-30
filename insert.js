const db = require('./database');

async function insertData() {
    try {
        await db.connect();

        // Aqui você pode executar a consulta para inserir os dados na tabela
        await db.query(`INSERT INTO cadastro (nome, idade) VALUES ('Jorge Da Silva',17)`);

        console.log("Dados inseridos com sucesso");
    } catch (error) {
        console.log("Erro!", error);
    } finally {
        await db.end();
    }
}

insertData();
