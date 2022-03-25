const express = require('express');

const app = express();

app.get("/", (request, response) => {
    //enviando uma mensagem para quem ta fazendo a request
    // return response.send("Hello world!");

    return response.json({ message: "Hello World - Fundamentos Node JS!"});
})

//Colando a porta
app.listen(3333);