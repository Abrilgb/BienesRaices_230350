import Usuario from '../models/Usuario.js'

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

const registrar= async(req,res)=> {
   const usuarios = await Usuario.create(req.body)
   res.json(usuarios)//retorna el usuario con informacion en la base de datos 
}

const formularioPasswordRecovery = (req,res)=>{
    b.render('auth/passwordRecovery', {
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