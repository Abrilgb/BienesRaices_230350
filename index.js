const express = require(`express`); // declarando un objeto : mostrar paginas leer datos. Importar la libreria para crear un servidor web 
//import generalRoutes from `./routes/generalRoutes.js`
import userRouter from `./routes/userRouter.js`
//instanciar nuestra aplicacion 
const app = express()

//configuramos nuestro servidor web
const port = 3000; 
app.listen(port, ()=>{
    console.log(`La aplicacion a iniciado en el puerto ${port}`);
})


//app.use(`/`,generalRouters);
app.use(`/usuario/`,userRouter);
//probamos la ruta para poder presentar ,emsajes al usuario 

app.get("/", function(req, res){
res.send("Hola mundo desde Node, a traves del navegador");
})

app.get("/QuienSoy", function(req, res){
    res.json({"estudiante": "Abril Guzman Barrera ", 
        "carrera": "TI DSM",
        "grado": "4",
        "grupo" : "B",
        "asignatura": "Aplicaciones web orientada a servicios (AWOS)"
    });
})