import { body, check, validationResult } from 'express-validator'//para detonar validaciones y el otro para darnos la validacion 
import Usuario from '../models/Usuario.js'
import { response } from 'express'
import { generarId } from '../Helpers/tokens.js'
import { Token } from 'graphql'

const formularioLogin = (req,res) => {
    res.render('auth/login', {
        //autenticado: false //se lepone coma para un segundo parametro esto es una variable y si no coincide o asi sera folse
        page:" Ingresa a la plataforma"
    })
}

//l decimos al router donde tiene que indicar 
const formularioRegister = (req,res) => {
    res.render('auth/register', {
        page: "Crea una cuenta..."

    })
}
//async : estan haciendose varias cosas al mismo tiempo, se divide el trabajo 
const registrar= async(req,res)=> {

    const usuario = await Usuario.create(req.body)
    console.log(req.body)
    res.json(usuario)
    //validacion 
    await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req)//para verificar si el campo n o esta vacio 
    await check('email').isEmail().withMessage('Eso no parece un email').run(req)
    await check('password').isLength({min:6}).withMessage('El password debe de ser por lo menos de seis caracteres').run(req)
    await check('validacion_contraseña').equals(req.body.validacion_contraseña).withMessage('El password no coincide').run(req)


    //return res.json(resultado.array())
    let resultado = validationResult(req)

    //destructuracion de nuestro recuest 
    const {nombre:name, email:email,password:password}=req.body

    //verificar que el usuario no existe previamente en la bd 
    const existingUser = await Usuario.findOne({where: {email}})

    console.log(existingUser)

    if(existingUser){
        return response.render("auth/registrar", {
            page: 'Error al intentar crear la cuenta de usuario',
            errors: [{msg: `El usuario ${email} ya se encuentra registrado `}],
            user: {
                name: name
            }
        })
    }

    //verificar si el resultado esta vacio
    if(resultado.isEmpty()){
        return res.render('auth/register', {
            page: "Crea una cuenta...",
            errors: resultado.array()
    
        })
    }
    console.log("Registrabndo a un nuevo usuario");
    console.log(req.body);

    //Registramso los datos en la base de atos 
        const newUser = await Usuario.create ({
        name: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
        token:generarId()
        });
        response.json(newUser);
    return;

    //Mostrar mensaje de confirmacion 
    res.render('templates/mesaage',
        {
    
        }
    )
}
//retorna el usuario con informacion en la base de datos 

const formularioPasswordRecovery = (req,res)=>{
    res.render('auth/passwordRecovery', {
        page: "Recuperacion de contraseña "
    })
}

//ponerdisponibles para toda la  pagina 
export {
    formularioLogin, 
    formularioRegister,
    registrar,
    formularioPasswordRecovery
}