import express, { response } from 'express'

const app = express()

/*
* GET => select
* POST => insert
* PUT => update
* DELETE => deletar
* PATCH => Alterar uma informação específica
*/

/*** 
 * Tipos de parâmetros
 * Route params => /produtos/1234
 * Query params => /produtos?nome=teclado&descricao=bom 
 * Body params => {
        "nome": "teclado",
        "descricao": "teclado bom"
    }
 * ***/

app.get('/teste', (req, res) => {
    return res.send("Olá NLW")
})

app.post('/testepost', (req, res) => {
    return res.send("Olá NLW Teste POST")
})

app.listen(3000, () => console.log("Servidor executando........"))