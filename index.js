const express = require("express");
const app = express();
const porta = 8080;


//Estou dizendo ao express usar o EJS como engine
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {
    res.send('Formulário recebido')
})

app.listen(porta, () => {
    console.log("App rodando")
});