module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define(
    "PostCategory",
    {
      postId: { type: DataTypes.INTEGER, primaryKey: true },
      categoryId: { type: DataTypes.INTEGER, primaryKey: true },
    },
    {
      timestamps: false,
      tableName: "PostCategories",
    }
  );
  postCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: postCategory,
      foreignKey: "postId",
      as: "post",
      otherKey: "categoryId",
    });
    models.BlogPost.belongsToMany(models.Category, {
      through: postCategory,
      foreignKey: "categoryId",
      as: "category",
      otherKey: "postId",
    });
  };
  return postCategory;
};
