const formularioLogin = (a,b) => {
    b.render('auth/login', {
        autenticado: false //se lepone coma para un segundo parametro esto es una variable y si no coincide o asi sera folse
    })
}

//l decimos al router donde tiene que indicar 
const formularioRegister = (a,b) => {
    b.render('auth/register', {

    })
}

const formularioPasswordRecovery = (a,b)=>{
    b.render('auth/passwordRecovery', {

    })
}

//ponerdisponibles para toda la  pagina 
export {formularioLogin, formularioRegister, formularioPasswordRecovery}