const express = require("express");

const alunosRoutes = require('./routes/alunosRoutes')

const servidor = express();

servidor.use(express.json())
servidor.use(alunosRoutes)

servidor.listen("8080", () => {
  console.log("Rodando e Dançando na porta http://localhost:8080");
});