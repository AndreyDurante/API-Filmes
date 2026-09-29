import express from "express";
import dotenv from "dotenv";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./Router/index.js";

dotenv.config();

const app = express();
routes(app);

const conexao = await conectaNaDataBase();

conexao.on("error", (error) => {
    console.error("erro de conexão", error);
});

conexao.once("open", () => {
    console.log("Servidor conectado com o banco de dados");
});

export default app