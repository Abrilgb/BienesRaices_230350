import nodemailer from 'nodemailer'
import detenv from 'dotenv'

detenv.config({path: '.env'})

const emailAfterRegister = async (newUserDtata) => {
    const transport=nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.EMAIL_PORT,
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.EMAIL_PASS
        }
    })
}

//COSOLE.LOG(DATA)

const { email, name, token}= newUserDtata

//enciar email
await transport.sendEmail({
    from: 'bienes_raices_230350.com',
    to: email,
    subject: 'Bienvenido/a al BienesRaices-230350',
    test: 'Ya casi puedes usar nuestra plataform, solo falta ...',
    html: `<p> Hola, <span style="color: red"> ${name}</span>, <br>
    Bienvenido a la plataforma de BienesRaices, el sistio seguro donde podraas buscar, comprara y ofertar propiedades atraves de internet. <br>
    <p>Ya solo necesitamos confirmes la cuenta que creaste, dando click  a la siguiente liga: <a href="${process.env.BACKEND_HOST}: ${process.env.BACKEND_PORT}/confirm/${token}"> Confirma tu cuenta<a><p>`
})
