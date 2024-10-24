import express from 'express'; 

const router = express.Router();

//GET
router.get("/busquedaPorID/:id",function(request,response){
    response.send(`Se esta solicitando buscar al usuario con ID: ${request.params.id}`)
})

//POST


//PUT

//PATCH

export default router;