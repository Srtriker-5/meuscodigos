const express = require("express");
const app = express();
const porta = 8080;
const fs = require("fs");




app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



app.set("view engine", "ejs");



app.get("/", (req, res) => {
  res.render("index");
});


app.get("/recebeu", (req, res) => {
  res.redirect("/");
});


app.post("/recebeu", (req, res) => {
  
  let { nome, email, senha, curso, idade } = req.body;

  const dadosdoformulario = {
    nome: nome,
    email: email,
    senha: senha,
    curso: curso,
    idade: idade,
  };

  const dadosconvertido = JSON.stringify(dadosdoformulario) + "\n";
  fs.appendFile("bancodedados.txt", dadosconvertido, (err) => {
    if (err) {
      console.error("ero na hora de salvar os dados", err);
    }
    console.log("salvo salvo");
    res.render("recebido");
  });
});

app.listen(porta, () => {
  console.log(`Rodando na porta https://localhost:${porta}`);
});