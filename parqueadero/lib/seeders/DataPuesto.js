const Puesto = require('../models/ModelsParqueadero');


exports.InsertPuesto = async ()=>{
    console.log("entre al puesto")
    const puesto = await Puesto.create({  numeroPuesto:"1",statePuesto:"0" });

    const puesto1 = await Puesto.create({  numeroPuesto:"2",statePuesto:"0" });

    const puesto2 = await Puesto.create({  numeroPuesto:"3",statePuesto:"0" });


    const puesto3 = await Puesto.create({  numeroPuesto:"4",statePuesto:"0" });

    const puesto4 = await Puesto.create({  numeroPuesto:"5",statePuesto:"1" });

    const puesto5 = await Puesto.create({  numeroPuesto:"6",statePuesto:"0" });



    const puesto6 = await Puesto.create({  numeroPuesto:"7",statePuesto:"0" });
    const puesto7 = await Puesto.create({  numeroPuesto:"8",statePuesto:"0" });

    const puesto8 = await Puesto.create({  numeroPuesto:"9",statePuesto:"0" });

}