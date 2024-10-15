//IMPORTA O EXPRESS
import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import livro from './models/Livro.js';

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.log("erro de conexão: ", erro)
});

conexao.once("open", () => {
    console.log("conexão com o banco feita com sucesso")
});


//INSTANCIA O EXPRESS
const app = express();

//usa json
app.use(express.json());

//Criando uma rota
app.get('/', (req, res) => {
    res.status(200).send("Curso de node JS");
});


//trazer todos os livros
app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});

//criar um livro
app.post("/livros", (req, res) => {
    const novoLivro = req.body;

})

//buscar um livro por id
app.get("/livros/:id", (req, res) => {
    const id = buscarLivro(req.params.id);
    res.status(200).json(livros[id]);
});

//Atualizar um livro
app.put("/livros/:id", (req, res) => {
    const id = buscarLivro(req.params.id);
    livros[id].titulo = req.body.titulo;
    res.status(200).json(livros);
})

//Deletar um livro
app.delete("/livros/:id", (req, res) => {
    const id = buscarLivro(req.params.id);
    livros.splice(id, 1);
    res.status(200).json(livros);
})


export default app;