const { Usuario } = require('../models');
const usuariosController = {
  index: async (req, res) => {
    let usuarios = await Usuario.findAll();
    return res.json(usuarios);
  },
  create: async (req, res) => {
    let { nome, email, senha } = req.body;

    Usuario.create({
      nome,
      email,
      senha,
    });
    return res.json(`Usuario adicionado ${nome}, ${email},${senha}`);
  },
  update: (req, res) => {
    let { id } = req.params;
    let { nome, email, senha } = req.body;
    Usuario.update(
      {
        nome,
        email,
        senha,
      },
      { where: { id: id } }
    );

    return res.send(`retorno `);
  },
};
module.exports = usuariosController;
