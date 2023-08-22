// Importando o pacote express
const express = require('express');

// instanciando o express 
const app = express();

//habilitar o uso de JSON no servidor
app.use(express.json())

// Método GET
app.get('/api/alunos', (req, res) => {
    //res.send('Hello World');
    res.status(200).json({
        status: 'sucess',
        // Dados do banco
        data: {
            alunos: [
                {
                    id_user: 1,
                    nome: 'Eduardo',
                    idade: 17
                },
                {
                    id_user: 2,
                    nome: 'Cleiton',
                    idade: 29
                },
            ]
        }
    })
})

//

// definir a porta do servidor
const PORT = 3006;

// testar  o servidor
app.listen(PORT, () => console.log(`Running at port ${PORT}`))

