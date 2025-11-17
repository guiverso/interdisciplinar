/*
G - guilherme
P - Pedro
A - Anderson
*/
const express = require('express');//G pega a biblioteca express
const path = require('path');//G pega a biblioteca path

const auth = require('./routes/auth.js')

const app = express();//G servidor
const port = 80;//G porta

app.use(express.json());
const public = path.join(__dirname,"./public");
app.use(express.static(path.join(public)));
app.use("/auth",auth)


app.get('/',(req,res)=>{//G - página index
    //G - só precisa dessa rota aqui, o resto a gente vai aplicar na pasta Routes
    const page = path.join(__dirname,"./public/views/index.html");
    res.sendFile(page);
})

app.listen(port, () => {//G Servidor rodando aquiu
    console.log("servidor rodando na porta: "+port);
});