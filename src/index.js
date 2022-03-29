const express = require('express');

const app = express();

app.use(express.json());

// app.get("/", (request, response) => {
//     enviando uma mensagem para quem ta fazendo a request
//     return response.send("Hello world!");

//     return response.json({ message: "Hello World - Fundamentos Node JS!"});
// })

app.get('/courses', (request, response) => {
    const query = request.query;
    console.log('Query Params =>',query);
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log('Body ->', body)
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put('/courses/:id', (request, response) => {
    const params = request.params;
    console.log(params);
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch('/courses/:id', (request, response) => {
    return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete('/courses/:id', (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 4"]);
})

//Colando a porta
app.listen(3333);