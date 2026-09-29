import express from "express";
import filme from "../models/Filme.js";

class FilmeController {
    static async listarFilmes(req, res) {
        try {
            const filmesEncontrados = await filme.find({});
            res.status(200).json(filmesEncontrados);
        } catch (erro) {
            res.status(500).send("Filmes não encontrados");
        }
    }
}

export default FilmeController;