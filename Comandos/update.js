const db = require('./database');

async function updateData() {
    try {
        await db.connect();

        // Aqui você pode executar a consulta para atualizar os dados na tabela
        await db.query(`UPDATE cadastro SET coluna1 = 'novo valor' WHERE id = 1`);

        console.log("Dados atualizados com sucesso");
    } catch (error) {
        console.log("Erro!", error);
    } finally {
        await db.end();
    }
}

updateData();
