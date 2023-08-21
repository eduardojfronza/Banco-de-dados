import livros from "../models/Livro.js";

class LivroController {

    // Rota para obter a lista de livros
    static listarLivros = async (req, res) => {
        try {
            const Livros = await livros.find();
            res.status(200).json(Livros);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static cadastrarLivros = async (req, res) => {
        try {
            const novoLivro = new livros(req.body);
            await novoLivro.save();
            res.status(201).send(novoLivro.toJSON());
        } catch (error) {
            res.status(500).send({ message: `${error.message} - falha ao cadastrar livro` });
        }
    }
}


export default LivroController