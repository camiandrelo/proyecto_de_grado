const  Sequelize = require('Sequelize');
const db = require('../../config/BD');

const Vehicles = db.define('vehiculos',{
    id :{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    placa :{type: Sequelize.STRING(10)},
    tameEnd :{type:Sequelize.DATE()}
});

module.exports = Vehicles;