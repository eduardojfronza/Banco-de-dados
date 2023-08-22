import livros from "../models/Livro.js";

class LivroController {

    // Rota para obter a lista de livros
    static listarLivros = async (req, res) => {
        try {
            const livrosList = await livros.find().populate('autor');
            res.status(200).json(livrosList);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    

    static listarLivroPorId = async (req, res) => {
        const id = req.params.id;

        try {
            const foundBook = await livros.findById(id);

            if (!foundBook) {
                res.status(404).send({ message: 'Livro não encontrado.' });
            } else {
                res.status(200).send(foundBook);
            }
        } catch (err) {
            res.status(500).send({ message: err.message });
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

    static atualizarLivro = async (req, res) => {
        const id = req.params.id;
        try {
            const updatedBook = await livros.findByIdAndUpdate(id, { $set: req.body });
            if (updatedBook) {
                res.status(200).send({ message: 'Livro atualizado com sucesso!' });
            } else {
                res.status(404).send({ message: 'Livro não encontrado.' });
            }
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    static excluirLivro = async (req, res) => {
        const id = req.params.id;
        try {
            const deletedBook = await livros.findByIdAndDelete(id);

            if (!deletedBook) {
                res.status(404).send({ message: 'Livro não encontrado.' });
            } else {
                res.status(200).send({ message: 'Livro removido com sucesso!' });
            }
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    static listarLivroPorEditora = async (req, res) => {
        const editora = req.query.editora;
    
        try {
            const Livros = await livros.find({ 'editora': editora }).exec();
            res.status(200).send(Livros);
        } catch (error) {
            res.status(500).send({ message: error.message }); 
        }
    }
    
    



}


export default LivroController