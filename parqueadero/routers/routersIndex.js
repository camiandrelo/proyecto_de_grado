const express = require('express');
const  router  = express.Router();

const ControllerVehicles = require('../lib/controllers/vehiclesControllers');

module.exports = function (){
    router.post('/',ControllerVehicles.insertvehicles);
    router.get('/',ControllerVehicles.selectVehicles);
    router.post('/tarifa',ControllerVehicles.payFee);
    return router;
}
