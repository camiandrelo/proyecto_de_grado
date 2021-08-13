const Vehicles = require('../models/Modelsvehicles')
const TypeVehicles = require ('../models/typeVehicle');
const Puestos = require('../models/ModelsParqueadero');
const {Op} = require('Sequelize');
const net = require("net");

exports.insertvehicles = async (req,res)=>{

    const Puesto = await Puestos.findOne({
        where:{
            statePuesto:0
        },
    })
    let ParqueaderId = 0;
    Puesto? (
        ParqueaderId  = Puesto.dataValues.id
         ):(
        res.status(400).json({ error: 'El parqueadero esta ocupado'})
        );

    if(!ParqueaderId == 0){
        const statePuesto = 1;
        const {placa, typesVehicleId} = req.body;
        if (!placa) {
            res.status(400).json({error: 'la placa se envío en un formato erroneo o no existe'})
        } else {
            if (placa.length >= 10) {
                res.status(400).json({error: 'el numero de la placa es muy largo'})
            } else {
               await Vehicles.create({placa, typesVehicleId, ParqueaderId}).then(
                    await Puestos.update({
                        statePuesto: 1
                    }, {where: {id: ParqueaderId}}).then(
                        res.status(200).json({error: 'el vehiculo ingreso con exito'})
                    )
                );
            }
        }
    }
}

exports.selectVehicles = async (req,res)=>{
   await  Vehicles.findAll({
        include: {
            model :TypeVehicles,
            attributes :['type']
        },
        attributes:["placa","updatedAt","ParqueaderId","id"],
       where:{
           tameEnd: {
               [Op.is]: null
           }
       }
   }).then(Vehicles =>  res.json(Vehicles))
}

exports.payFee = async  (req,res)=>{
   const { id } = req.body;
    const vehicle = await Vehicles.findAll({
        include:{
            model :TypeVehicles,
            attributes: ['type','tarifa']
        },
        attributes:['placa','createdAt','ParqueaderId'],
       where:{
           id:id
       }
    });

    const vehiculos = vehicle[0]
    let dateInit = new  Date(vehiculos.dataValues.createdAt);
    
    const parqueaderoID = vehiculos.dataValues.ParqueaderId;

    let fachaActual = new Date();
    let horaPaga = fachaActual.getTime() - dateInit.getTime();
    horaPaga= (horaPaga / (1000 * 60 * 60)).toFixed(1);

    const  TotalPagar =  horaPaga * vehiculos.dataValues.typesVehicle.tarifa;

    await Puestos.update({
        statePuesto: 0
    }, {where: {id: parqueaderoID}})

    await Vehicles.update({
        tameEnd: fachaActual
    }, {where: {id:id }})

 res.json(TotalPagar)
}