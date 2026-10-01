import express from "express";
import filme from "../models/Filme.js";
import { message } from "prompt";

class FilmeController {
    static async listarFilmes(req, res) {
        try {
            const filmesEncontrados = await filme.find({});
            res.status(200).json(filmesEncontrados);
        } catch (erro) {
            res.status(500).send("Filmes não encontrados");
        }
    }

    static async listarFilmePorId (req, res) {
        const id = req.params.id;
        try {
            const filmePorId = await filme.find(id)
            res.status(200).json(filmePorId);
        } catch (erro) {
            res.status(500).send("Filme não encontrado");
        }
    }

    static async cadastrarFilme (req, res) {
        try {
            const filmeNovo = await filme.create(req.body);
            res.status(200).json({ message: "Filme cadastrado com sucesso", filme: filmeNovo } )
        } catch (erro) {
            res.status(500).json({ message : `${erro.message} - Falha ao cadastrar filme`})
        }
    }

    static async atualizarFilme (req, res) {
        const id = req.params.id;
        try {
            await filme.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Filme atualizado com sucesso"} )
        } catch (erro) {
            res.status(500).json({ message : `${erro.message} - Falha ao atualizar filme`})
        }
    }

    static async excluirFilme (req, res) {
        const id = req.params.id;
        try {
            await filme.findByIdAndDelete(id);
            res.status(200).json({ message: "Filme excluído com sucesso"} )
        } catch (erro) {
            res.status(500).json({ message : `${erro.message} - Falha ao excluir filme`})
        }
    }
}

export default FilmeController;