//ECMA SCRIPT 6
// CommonJS
import express from 'express';
//const express= require('express'); //Importar la librería para crear un servidor web
import generalRoutes from './routes/generalRoutes.js'
// instanciar nuestra aplicacion web
import userRouter from './routes/userRouter.js'
const app=express();

//configuramos nuestro servidor web
const port=3000;
app.listen(port, ()=>{
    console.log(`La aplicacion ha iniciado en el puerto ${port} `);
})

app.use('/',generalRoutes );

app.use('/usuario',userRouter);