const  Sequelize = require('Sequelize');
const db = require('../../config/BD');

const Puesto = db.define('Puesto',{
    id :{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numeroPuesto :{type: Sequelize.STRING(10)},
    statePuesto:{type: Sequelize.BOOLEAN()}
});

module.exports = Puesto;
