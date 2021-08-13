const { Sequelize } = require('sequelize');

const bd = new Sequelize('parqueadero', 'root', '', {
    host: 'localhost',
    port :3306,

    define:{
        timestamps:true
    },
    dialect: 'mysql'
});

module.exports = bd;