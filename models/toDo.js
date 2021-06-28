module.exports = (sequelize, DataTypes) => {
    const ToDo = sequelize.define("ToDo", {
      toDo: {
        type: DataTypes.STRING,
      },
      toDoCompleted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    });
    ToDo.associate = (db) => {
      ToDo.belongsTo(db.User);
    };
  
    return ToDo;
  };
  