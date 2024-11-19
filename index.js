
import express from 'express';
import generalRoutes from './routes/generalRoutes.js'
import userRoutes from './routes/userRouter.js'
import db from './db/config.js'
import dotenv from 'dotenv'
//const express = require('express'); //DECLARANDO UN OBJETO QUE VA A PERMITIR LEER PAGINAS ETC.importar la libreria para crear un servidor web

//INSTANCIAR NUESTRA APLICACIÓN WEB

const app = express();

//habilitarlectura 
app.use(express.urlencoded({extended:true}))

//coneccion a la base de datos 
try {
  await db.authenticate();
  db.sync()//crear la tabla en caso de que no este creada 
  console.log('Conexion Correcta a la Base de datos ')
}catch (error){
  console.log(error);
}

//CONFIGURAMOS NUESTRO SERVIDOR WEB (puerto donde estara escuchando nuestro sitio web)
const port = process.env.BACKEND_PORT;
app.listen(port, () => {
  console.log(`La aplicación ha iniciado en el puerto: ${port}`);  
});

//Routing - Enrutamiento
app.use('/',generalRoutes);
app.use('/auth/', userRoutes);
//Probamos rutas para poder presentar mensajes al usuario a través del navegador
app.use('/usuario/', userRoutes);

//Habilitar pug
//Set es para hacer configuraciones
app.set('view engine','pug')
app.set('views','./views')//se define donde tendrá el proyecto las vistas
//auth -> auntentificación

app.use(express.static('public'))