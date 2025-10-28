const express = require('express');
const path = require('path');

const app = express();
const port = 80;

const views = path.join(__dirname,"./views");
app.use(express.static(path.join(views)));

app.get('/',(req,res)=>{
    const page = path.join(__dirname,"./views/index.html");
    res.sendFile(page);
})

app.listen(port, () => {
    console.log("servidor rodando na porta 80");
});