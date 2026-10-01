import express from "express";
import filmes from "./filmesRouter.js";
import FilmeController from "../Controller/FilmeController.js";

const routes = (app) => {
    app.use(express.json());
    app.use(filmes);

    app.route("/").get((req, res) => {
        res.status(200).send("Curso de Node.js");
    });
    

};

export default routes;