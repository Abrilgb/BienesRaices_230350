import express from 'express'; 

const router = express.Router();

router.get('/',function(req,res){
    res.send("Hola Mundo desde Node, a través del Navegador")
})
//Routing- enrutamiento .
//Probamos las rutas para poder presentar mensajes al
router.get('/QuienSoy',function(req,res){
    res.json({"estudiante":"Angel de Jesus Rufino Mendoza",
        "carrera":"TI DSM",
        "grado":"4°",
        "grupo":"B",
        "asignatura":"Aplicaciones Web Orientada a Servicios (AWOS)"
    })
})

export default router;  //Esta palabra reservada de Js me permitye exportar los elementos definidos y utilizarlo en otros archivos del mismo tipo.