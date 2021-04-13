module.exports = (sequelize, DataTypes) => {
  const Comentario = sequelize.define(
    'Comentario',
    {
      texto: DataTypes.STRING,
      usuarios_id: DataTypes.STRING,
      posts_id: DataTypes.STRING,
    },
    {
      tableName: 'comentarios',
      timestamps: false,
    }
  );
  Comentario.associate = (models) => {
    // relação N:1 (vários comentarios para 1 post)
    Comentario.belongsTo(models.Post, {
      as: 'post',
      foreignKey: 'posts_id',
    });
  };

  return Comentario;
};
