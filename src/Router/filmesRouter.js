import express from "express";
import FilmeController from "../Controller/FilmeController.js";

const router = express.Router();

router.get("/filmes", FilmeController.listarFilmes);
router.get("/filmes/:id", FilmeController.listarFilmePorId);
router.put("/filmes/:id", FilmeController.atualizarFilme);
router.post("/filmes", FilmeController.cadastrarFilme);
router.delete("/filmes/:id", FilmeController.excluirFilme);


export default router;