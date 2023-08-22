import express from "express"; // Importa o módulo Express
import db from "./config/db_connect.js";
import routes from "./Routes/index.js";



db.on("erro", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express(); // Cria uma instância do aplicativo Express

routes(app)


export default app; // Exporta o aplicativo Express para uso em outros arquivos
