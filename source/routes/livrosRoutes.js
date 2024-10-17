import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

//as buscas personalizadas devem vir antes dos ids pq se não ele chama o "busca" como se fosse um id

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorEditor);
//http://localhost:3000/livros/busca?editora=Classicos

routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);


export default routes;