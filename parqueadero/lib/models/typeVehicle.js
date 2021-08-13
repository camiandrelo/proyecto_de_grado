const  Sequelize = require('Sequelize');
const db = require('../../config/BD');

const TypeVehicle = db.define('typesVehicle',{
    id :{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    type :{type: Sequelize.STRING(50)},
    tarifa :{type: Sequelize.STRING(50)},
});

module.exports = TypeVehicle;