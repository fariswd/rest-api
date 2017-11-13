'use strict';
//bcrypt
// const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  });
  
  // Before Create ga ke hash
  // User.beforeCreate((user, options) => {
  //   const saltRounds = 10;
  //   const myPlaintextPassword = user.password;
  //   bcrypt.genSalt(saltRounds, function(err, salt) {
  //     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
  //         // Store hash in your password DB.
  //         user.password = hash;
  //     });
  //     
  //   });
  //   
  // });
  
  return User;
};