const express = require('express');
const path = require('path');

const app = express();
const port = 80;

const public = path.join(__dirname,"./public");
app.use(express.static(path.join(public)));


app.get('/',(req,res)=>{
    const page = path.join(__dirname,"./public/views/index.html");
    res.sendFile(page);
})

app.listen(port, () => {
    console.log("servidor rodando na porta 80");
});