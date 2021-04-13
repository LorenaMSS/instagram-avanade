module.exports = (sequelize, DataTypes) => {
  ////
  const Post = sequelize.define(
    'Post',
    {
      texto: DataTypes.STRING,
      usuarios_id: DataTypes.STRING,
      n_likes: DataTypes.STRING,
    },
    {
      tableName: 'posts',
      timestamps: false,
    }
  );

  Post.associate = (models) => {
    // relação N:1 (vários posts de 1 usuario)
    Post.belongsTo(models.Usuario, {
      as: 'usuario',
      foreignKey: 'usuarios_id',
    });
    // relação 1:N (post tem varios comentarios)
    Post.hasMany(models.Comentario, {
      as: 'comentario',
      foreignKey: 'posts_id',
    });

    Post.belongsToMany(models.Usuario, {
      as: 'curtiu',
      through: 'curtidas',
      foreignKey: 'posts_id',
      otherKey: 'usuarios_id',
      timestamps: false,
    });
  };
  return Post;
};
