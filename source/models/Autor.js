import mongoose from "mongoose";

const autorScheema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: mongoose.Schema.Types.String, required: true },
    nacionalidade: { type: mongoose.Schema.Types.String }
}, { versionKey: false });

const autor = mongoose.model("autores", autorScheema);

export { autor, autorScheema };