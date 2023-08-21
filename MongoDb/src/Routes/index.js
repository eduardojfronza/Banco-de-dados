import express from 'express';
import livros from './livrosRoutes.js'; 
import app from '../app.js';

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo: "Curso de node"})
    }) 

    app.use(
        express.json(),
        livros,
    )
}

export default routes