import livro from "../models/Livro.js";

class LivroController {

    //static serve para usar metodos de uma classe sem ter que instanciar ela antes
    static async listarLivros(req, res) {  
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    }
};

export default LivroController;
