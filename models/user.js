const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {

  
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    theme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    
  });

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  User.prototype.toJSON =  function () {
    const values = Object.assign({}, this.get());
  
    delete values.password;
    return values;
  }

  User.addHook("beforeCreate", (User) => {
    User.password = bcrypt.hashSync(
      User.password,
      bcrypt.genSaltSync(10),
      null
    );
    User.associate = (db) => {
      User.hasMany(db.ToDo);
    };
  });
  return User;
};
