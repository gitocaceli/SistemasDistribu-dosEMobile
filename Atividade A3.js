const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'seubanco'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao MySQL!');
});

// Modelos e Controladores - Produtos
const produtoModel = {
  getAll(callback) {
    db.query('SELECT * FROM produtos', callback);
  },
  getById(id, callback) {
    db.query('SELECT * FROM produtos WHERE id = ?', [id], callback);
  },
  create(produto, callback) {
    db.query('INSERT INTO produtos SET ?', produto, callback);
  },
  update(id, produto, callback) {
    db.query('UPDATE produtos SET ? WHERE id = ?', [produto, id], callback);
  },
  delete(id, callback) {
    db.query('DELETE FROM produtos WHERE id = ?', [id], callback);
  }
};

const produtoController = {
  getAll(req, res) {
    produtoModel.getAll((err, data) => {
      if (err) res.status(500).send(err);
      else res.json(data);
    });
  },
  getById(req, res) {
    produtoModel.getById(req.params.id, (err, data) => {
      if (err) res.status(500).send(err);
      else res.json(data[0]);
    });
  },
  create(req, res) {
    produtoModel.create(req.body, (err, result) => {
      if (err) res.status(500).send(err);
      else res.json({ id: result.insertId, ...req.body });
    });
  },
  update(req, res) {
    produtoModel.update(req.params.id, req.body, (err) => {
      if (err) res.status(500).send(err);
      else res.json({ id: req.params.id, ...req.body });
    });
  },
  delete(req, res) {
    produtoModel.delete(req.params.id, (err) => {
      if (err) res.status(500).send(err);
      else res.json({ message: 'Produto deletado' });
    });
  }
};

// Rotas - Produtos
app.get('/produtos', produtoController.getAll);
app.get('/produtos/:id', produtoController.getById);
app.post('/produtos', produtoController.create);
app.put('/produtos/:id', produtoController.update);
app.delete('/produtos/:id', produtoController.delete);

// Modelos e Controladores - Clientes
const clienteModel = {
  getAll(callback) {
    db.query('SELECT * FROM clientes', callback);
  },
  getById(id, callback) {
    db.query('SELECT * FROM clientes WHERE id = ?', [id], callback);
  },
  create(cliente, callback) {
    db.query('INSERT INTO clientes SET ?', cliente, callback);
  },
  update(id, cliente, callback) {
    db.query('UPDATE clientes SET ? WHERE id = ?', [cliente, id], callback);
  },
  delete(id, callback) {
    db.query('DELETE FROM clientes WHERE id = ?', [id], callback);
  }
};

const clienteController = {
  getAll(req, res) {
    clienteModel.getAll((err, data) => {
      if (err) res.status(500).send(err);
      else res.json(data);
    });
  },
  getById(req, res) {
    clienteModel.getById(req.params.id, (err, data) => {
      if (err) res.status(500).send(err);
      else res.json(data[0]);
    });
  },
  create(req, res) {
    clienteModel.create(req.body, (err, result) => {
      if (err) res.status(500).send(err);
      else res.json({ id: result.insertId, ...req.body });
    });
  },
  update(req, res) {
    clienteModel.update(req.params.id, req.body, (err) => {
      if (err) res.status(500).send(err);
      else res.json({ id: req.params.id, ...req.body });
    });
  },
  delete(req, res) {
    clienteModel.delete(req.params.id, (err) => {
      if (err) res.status(500).send(err);
      else res.json({ message: 'Cliente deletado' });
    });
  }
};

// Rotas - Clientes
app.get('/clientes', clienteController.getAll);
app.get('/clientes/:id', clienteController.getById);
app.post('/clientes', clienteController.create);
app.put('/clientes/:id', clienteController.update);
app.delete('/clientes/:id', clienteController.delete);

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});