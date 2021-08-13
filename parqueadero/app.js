const express = require('express');
const cors = require('cors');

const port = 3005;
const RoutersVehicles = require('./routers/routersIndex');

const app= express();
app.use(cors())

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const Connection = require('./config/BD');
Connection.sync()
        .then(()=>console.log("Conexion exitosa"))
        .catch((error)=>console.log(error))

require ('./lib/models/ModelIndex');

app.use('/',RoutersVehicles());

app.use((req,res)=>{
    res.send("ruta incorrecta error 404");
})

app.use((err,req,res,next)=>{
   res.send('aqui va el mensaje de error 500');
});

app.listen(port, ()=>{
    console.log(`este es el mensaje a la hora de lenvantar el servidor`);
})