import express from `express`

const router = express.Router();

router.get("/", function(req, res){
    res.send("Hola mundo desde Node, a traves del navegador");
    })
    
    router.get("/QuienSoy", function(req, res){
        res.json({"estudiante": "Abril Guzman Barrera ", 
            "carrera": "TI DSM",
            "grado": "4",
            "grupo" : "B",
            "asignatura": "Aplicaciones web orientada a servicios (AWOS)"
        });
    })

    export default router; // me permite exportar los elementos definidos y utilizarlos en otros archivos del mismo sitio 