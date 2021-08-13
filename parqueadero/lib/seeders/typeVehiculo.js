const TypeVehicle = require('../models/typeVehicle')


exports.InsertDataTypeVehicle = async ()=>{
   const typeVehicle = await TypeVehicle.create({  type:"moto",tarifa:"1000" });
   console.log("este es el vehiculo 1",typeVehicle);
   const typeVehicle1 = await TypeVehicle.create({  type:"camioneta",tarifa:"2000" });
   console.log("este es el vehiculo 2",typeVehicle);
   const typeVehicle2 = await TypeVehicle.create({  type:"vehiculo deportivo",tarifa:"1500" });
   console.log("este es el vehiculo 3",typeVehicle);
}