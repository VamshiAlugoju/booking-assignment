const Sequelize = require("sequelize");

const sequelize = new Sequelize("users","root","12345",{
    host:"localhost",
    dialect:"mysql"
});


module.exports = sequelize;