import  express  from "express";
import AutoresControllers from "../controllers/autoresControllers.js";


const router = express.Router();


router
    .get("/autores", AutoresControllers.listarAutores)
    .get("/autores/:id",AutoresControllers.listarAutoresPorId)
    .post("/autores", AutoresControllers.cadastrarAutores)
    .put("/autores/:id", AutoresControllers.atualizarAutor)
    .delete("/autores/:id", AutoresControllers.excluirAutor)

export default router