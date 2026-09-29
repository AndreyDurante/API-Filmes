import express from "express";
import FilmeController from "../Controller/FilmeController.js";

const router = express.Router();

router.get("/filmes", FilmeController.listarFilmes);

export default router;