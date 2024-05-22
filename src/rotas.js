
const express = require('express');
const { deletarLivros, atualizarLivros, cadastrarLivros, listarLivrosPorId, listarLivros } = require('./controladores/biblioteca');

const rotas = express();

rotas.get('/livros', listarLivros);
rotas.get('/livros/:id', listarLivrosPorId);
rotas.post('/livros', cadastrarLivros);
rotas.put('/livros/:id', atualizarLivros);
rotas.delete('/livros/:id', deletarLivros);


module.exports = rotas