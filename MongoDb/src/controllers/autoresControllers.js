import autores from "../models/Autor.js";


class AutoresControllers {

    // Rota para obter a lista de autores
    static listarAutores = async (req, res) => {
        try {
            const Autores = await autores.find();
            res.status(200).json(Autores);

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static listarAutoresPorId = async (req, res) => {
        const id = req.params.id;
    
        try {
            const foundAutores = await autores.findById(id).populate('autor', 'nome');
    
            if (!foundAutores) {
                res.status(404).send({ message: 'Autor não encontrado.' });
            } else {
                res.status(200).send(foundAutores);
            }
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
    

    static cadastrarAutores = async (req, res) => {
        try {
            const novoAutor = new autores(req.body);
            await novoAutor.save();
            res.status(201).send(novoAutor.toJSON());
        } catch (error) {
            res.status(500).send({ message: `${error.message} - falha ao cadastrar autor` });
        }
    }

    static atualizarAutor = async (req, res) => {
        const id = req.params.id;
        try {
            const updatedAutor = await autores.findByIdAndUpdate(id, { $set: req.body });
            if (updatedAutor) {
                res.status(200).send({ message: 'Autor atualizado com sucesso!' });
            } else {
                res.status(404).send({ message: 'Autor não encontrado.' });
            }
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    static excluirAutor = async (req, res) => {
        const id = req.params.id;
        try {
            const deletedAutor = await autores.findByIdAndDelete(id);
            
            if (!deletedAutor) {
                res.status(404).send({ message: 'Autor não encontrado.' });
            } else {
                res.status(200).send({ message: 'Autor removido com sucesso!' });
            }
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
    


}


export default AutoresControllers