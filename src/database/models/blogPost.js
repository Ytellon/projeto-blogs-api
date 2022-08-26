module.exports = (sequelize, DataTypes) => {
    const blogPost = sequelize.define('BlogPost', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },
    {
        timestamps: false,
        tableName: 'BlogPosts',
    });
    blogPost.associate = (models) => {
        blogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
    return blogPost;
};