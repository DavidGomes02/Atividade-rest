let { livros } = require("../bancoDeDados");
let { id } = require("../bancoDeDados")

function listarLivros(req, res) {
    return res.status(200).json(livros);
}



function listarLivrosPorId(req, res) {
  const { id } = req.params;

  const resultado = livros.find((livros) => {
    return livros.id === Number(id);
  })
  if (!resultado) {
    return res.status(404).json({ mensagem: 'Livro não encontrado' })
  }
  return res.status(200).json(resultado);
}



function cadastrarLivros(req, res) {
  // console.log(req.body);
  const { titulo, autor, ano, numPaginas } = req.body

  if (!titulo) {
    return res.status(400).json({ mensagem: "O campo titulo é obrigatorio" })

  }

  if (!autor) {
    return res.status(400).json({ mensagem: "O campo autor é obrigatorio" })
  }

  if (!ano) {
    return res.status(400).json({ mensagem: "O campo ano é obrigatorio" })
  }

  if (!numPaginas) {
    return res.status(400).json({ mensagem: "O campo numPagina é obrigatorio" })
  }



  const livro = {
    id: id++,
    titulo,
    autor,
    ano,
    numPaginas
  }

  

  livros.push(livro);

  return res.status(201).json(livro)
}


function atualizarLivros(req, res) {

  const { id } = req.params;
  const { titulo, autor, ano, numPaginas  } = req.body

  const resultado = livros.find((livros) => {
    return livros.id === Number(id);
  })

  if (!titulo) {
    return res.status(400).json({ mensagem: "O campo titulo é obrigatorio" })

  }

  if (!autor) {
    return res.status(400).json({ mensagem: "O campo autor é obrigatorio" })
  }

  if (!ano) {
    return res.status(400).json({ mensagem: "O campo ano é obrigatorio" })
  }

  if (!numPaginas) {
    return res.status(404).json({ mensagem: 'O campo numPagina é obrigatorio' })
  }

  resultado.titulo = titulo;
  resultado.autor= autor;
  resultado.ano = ano;
  resultado.numPaginas = numPaginas;

  return res.status(200).send(resultado);

}

function deletarLivros(req, res) {
  const { id } = req.params;
  
  const resultado = livros.find((livros) => {
    return livros.id === Number(id);
  })
  if (!resultado) {
    return res.status(404).json({ mensagem: 'Instrutor não encontrado' })
  }

  livros = livros.filter( (livro) =>{
    return livro.id !== Number(id);
  })
  return res.status(200).json({ mensagem: 'Instrutor não encontrado' })

}

module.exports = {
  listarLivros,
  listarLivrosPorId,
  cadastrarLivros,
  atualizarLivros,
  deletarLivros
}
