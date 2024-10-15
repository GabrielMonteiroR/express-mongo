//IMPORTA O EXPRESS
import express from 'express';

//INSTANCIA O EXPRESS
const app = express();

//usa json
app.use(express.json());

//Criando uma rota
app.get('/', (req, res) => {
    res.status(200).send("Curso de node JS");
});

//mock de livros
const livros = [
    {
        id: 1,
        titulo: "O senhor dos anéis 1"
    },
    {
        id: 2,
        titulo: "O senhor dos anéis 2"
    }
]

//trazer todos os livros
app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

//criar um livro
app.post("/livros", (req, res) => {
    livros.push(req.body);

})

//buscar um livro por id
app.post("/livros/:id", (req, res) => {

})


export default app;