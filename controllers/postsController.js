const { Post } = require('../models');
const postsController = {
  index: async (req, res) => {
    let posts = await Post.findAll();
    return res.json(posts);
  },
  create: async (req, res) => {
    let { texto, usuarios_id, img, n_likes } = req.body;

    let novoPost = await Post.create({
      texto,
      usuarios_id,
      img,
      n_likes,
    });

    return res.json(novoPost);
  },

  update: async (req, res) => {
    let { id } = req.params;
    let { texto, usuarios_id, img, n_likes } = req.body;

    let postAtualizado = await Post.update(
      {
        texto,
        usuarios_id,
        img,
        n_likes,
      },
      { where: { id } }
    );

    return res.json(postAtualizado);
  },

  delete: async (req, res) => {
    let { id } = req.params;
    let deletePost = await Post.destroy({
      where: { id },
    });
    return res.json(deletePost);
  },
  show: async (req, res) => {
    let { id } = req.params;
    let mostrarPost = await Post.findAll({
      where: { usuarios_id: id },
    });
    return res.json(mostrarPost);
  },
};
module.exports = postsController;
