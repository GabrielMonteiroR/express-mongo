import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

    //static serve para usar metodos de uma classe sem ter que instanciar ela antes
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc }};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json(livroCriado);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroTarget = await livro.findById(id);
            res.status(201).json(livroTarget);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            const novoLivro = await livro.findByIdAndUpdate(id, req.body);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deletarLivro(req,res) {
        try {
            const id = req.params.id;
            const livroDeletado = await livro.findOneAndDelete(id);
            res.status(202).json(livroDeletado); 
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
};


export default LivroController;
