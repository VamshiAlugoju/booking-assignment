const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Users = sequelize.define("Users",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    Email:{
        type:Sequelize.STRING,
        allowNull:true
    },
    phone:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports = Users;