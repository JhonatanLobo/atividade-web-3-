const express = require('express');
const server = express();
const fs = require('fs');     // Modulos


server.get('/alunos', (req, res)=>{ //alunos
    res.json([{nome: 'Gustavo = 0'},  {nome:'Antonio Levi = 1'}, {nome: 'Jhonatan = 2'} ])
    let profs = ['Gustavo Lima', 'Antonio Levi', 'Eu'] 
    })


server.get('/aluno/:id', (req, res)=>{ // alunos por id
    let profs = ['Gustavo = Front end', 'Antonio Levi = Gerente do projeto', 'Jhonatan = back end'] 
    let meuId = req.params.id
    return res.json({
    nome: profs[meuId] })
})




server.listen(3000, function() {
    console.log('Servidor funfando!')})