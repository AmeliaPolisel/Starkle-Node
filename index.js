const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    lerArquivo(res)

})

app.put('/atualizarnome/:nome', async (req, res) => {
    await fs.readFile('./database.json', { encoding: 'utf8' }, async (err, data) => {
        if (err) throw err;
        console.log(data);
        res.send(' ')
        req.params
        var dataBase = JSON.parse(data)
        dataBase.name = req.params.nome
        console.log(req.params, " coisa", dataBase.name)

        await fs.writeFile('./dataBase.json', JSON.stringify(dataBase), () => {

        })
    });


})

app.listen(port, () => {
    console.log('Exemplo de app rodando em http:localhost:$', { port }
    )
})
function lerArquivodois() {
    fs.readFile('./database.json', { encoding: 'utf8' }, (err, data) => {
        if (err) throw err;
        console.log(data);
        return JSON.parse(data)


    });
}
function lerArquivo(res) {
    fs.readFile('./database.json', { encoding: 'utf8' }, (err, data) => {
        if (err) throw err;
        console.log(data);
        res.send(JSON.parse(data))


    });
}

