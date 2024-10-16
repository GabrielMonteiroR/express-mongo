import express from "express";
import livros from "./livrosRoutes.js";
import autor from "./autorRoutes.js";

// Função que configura as rotas
const routes = (app) => {
    app.use(express.json());
    app.route("/").get((req, res) => res.status(200).send("Curso de node JS"));
    app.use(livros, autor);
};

export default routes;
