const Parqueadero = require('./ModelsParqueadero');
const Vehiculo = require('./Modelsvehicles');
const TipoVehiculo = require('./typeVehicle');

Vehiculo.belongsTo(TipoVehiculo,{foreignKey:"typesVehicleId"});
Vehiculo.belongsTo(Parqueadero,{foreignKey:"ParqueaderId"});


