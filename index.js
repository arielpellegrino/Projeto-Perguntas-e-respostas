const express = require("express");
const app = express();
const porta = 8080;

//Estou dizendo ao express usar o EJS como engine
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "coca-cola", preco: 5},
        {nome: "Leite", preco: 1.45},
        {nome: "carne", preco: 5},
        {nome: "redbull", preco: 6}
    ];

    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    });
})

app.listen(porta, () => {
    console.log("App rodando")
});