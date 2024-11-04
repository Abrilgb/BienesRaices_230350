const formularioLogin = (a,b) => {
    b.render('auth/login', {
        //autenticado: false //se lepone coma para un segundo parametro esto es una variable y si no coincide o asi sera folse
        page:" Ingresa a la plataforma"
    })
}

//l decimos al router donde tiene que indicar 
const formularioRegister = (a,b) => {
    b.render('auth/register', {
        page: "Crea una cuenta..."

    })
}

const formularioPasswordRecovery = (a,b)=>{
    b.render('auth/passwordRecovery', {
        page: "Recuperacion de contraseña "
    })
}

//ponerdisponibles para toda la  pagina 
export {formularioLogin, formularioRegister, formularioPasswordRecovery}