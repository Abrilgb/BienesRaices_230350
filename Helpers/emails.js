import nodemailer from 'nodemailer';

const registerEmail = async (data) => {
    const transport = nodemailer.createTransport({
        host: process.env.Email_HOST,
        port: process.env.Email_PORT,
        auth: {
            user: process.env.Email_USER,
            pass: process.env.Email_PASS,
        },
    });

    const { email, name, token } = data;

    // Enviar el email
    await transport.sendMail({
        from: 'BienesRaices_230350',
        to: email,
        subject: 'Confirma tu cuenta...',
        text: `Estimado ${name}, es necesario que confirme su cuenta para poder acceder a BienesRaices_230499.`,
        html: `
           
            <header style="font-family: bold; text-align: center; line-height: 0.5;">
             <h1 style="color:#636940;">Bienes<strong style="color:#dc851f">Raices</strong></h1>
                
            </header>
            <div style="font-family: bold, sans-serif; text-align: justify; line-height: 1.6; color: #636940; background-color: #636940; padding: 25px; border: 10px solid #636940; border-radius: 5px;">
                <h1 style=" color: #dc851f;">¡Hola, <span style="color: #db995a;">${name}</span>!</h1>
              
                    <p style="font-size: 18px; color:#fff">
                        ¡Gracias por registrarte en <strong style="color:#dc851f">BienesRaices_230350</strong> ! Para finalizar el proceso de confirmación de tu cuenta y acceder a todos nuestros servicios, necesitamos que confirmes tu correo electrónico.
                    </p>
                    <p style="font-size: 18px; color: #fff;">
                        Si no reconoces esta solicitud o no creaste la cuenta, simplemente puedes ignorar este mensaje. ¡Agradecemos tu elección!
                    </p>
                <div style="text-align: center; margin: 50px 0;">
                            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirm/${token}" 
                               style="background-color: #db995a; color: white; text-decoration: none; padding: 15px 20px; border-radius: 5px; font-size: 16px;">
                               Confirmar Cuenta
                            </a>
                        </div>
              <p style="font-size: 18px; color: #fff;">
                        Estamos emocionados de poder ayudarte a encontrar la propiedad que deseas.
                    </p>
   
                    <div style="text-align: center; height:229px; background-color: #db995a; margin-top:10%; border-radius:78px">
                        
                         <div>
                            <img src="https://thumbs.dreamstime.com/b/inscripci%C3%B3n-de-abril-tarjeta-de-felicitaci%C3%B3n-con-caligraf%C3%ADa-dise%C3%B1o-de-letras-dibujado-mano-capa-de-la-foto-87755408.jpg" alt="Firma" style="max-width: 190px; margin-top: 5px;; border-radius: 6px; padding:1px">
                           
                           <p style="font-size: 20px; color: #fff; margin-top:5px">
                            Atentamente, <br>
                            <strong style=" color: #fff">Abril Guzmán Barrera</strong>
                        </p>
                        </div>
                    </div>
              </div >
                </body>
            
            <footer style="text-align: center;">
                @Todos los derechos reservados de BienesRaices_230350
            </footer>
        `,
    });
}    

const passwordRecoveryEmail = async (data) => {
    const transport = nodemailer.createTransport({
        host: process.env.Email_HOST,
        port: process.env.Email_PORT,
        auth: {
            user: process.env.Email_USER,
            pass: process.env.Email_PASS,
        },
    });

    const { email, name, token } = data;
    // Enviar el email
    await transport.sendMail({
        from: 'BienesRaices_230350',
        to: email,
        subject: 'Reestablece tu contraseña...',
        text: `Estimado ${name}, haz solicitado el cambio de contraseña de tu cuenta en BienesRaices_230499.`,
        html: `
            <header style="font-family: bold; text-align: center; line-height: 0.5;">
                <h1 style="color:#636940;">Bienes<strong style="color:#dc851f">Raices</strong></h1>
   
   
            <div style="font-family: bold, sans-serif; text-align: justify; line-height: 1.6; color: #636940; background-color: #636940; padding: 25px; border: 10px solid #636940; border-radius: 5px;">
                <h1 style=" color: #dc851f;">¡Hola, <span style="color: #db995a;">${name}</span>!</h1>
   
   
             
                    <p style="font-size: 18px;color; color:#fff">
                        Hemos recibido una solicitud para restablecer la contraseña de tu cuenta en <strong>BienesRaices_230499</strong>.
                    </p>
                  
                        
                        <div style="text-align: center; margin: 20px 0;">
                            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/reset-password/${token}" 
                               style="background-color: #db995a; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
                               Restablecer Contraseña
                            </a>
                        </div>
                    
                    <p style="font-size: 18px; color: #fff;">
                        Si no solicitaste este cambio, puedes ignorar este mensaje. Tu cuenta seguirá siendo segura.
                    </p>
                    <div style="text-align: center; line-height: 1.6;">
                        
                         <div style="margin-bottom: 15px;">
                            <img src="https://thumbs.dreamstime.com/b/inscripci%C3%B3n-de-abril-tarjeta-de-felicitaci%C3%B3n-con-caligraf%C3%ADa-dise%C3%B1o-de-letras-dibujado-mano-capa-de-la-foto-87755408.jpg" alt="Firma" style="max-width: 190px; margin-top: 20px;; border-radius: 6px; padding:1px">
                           <p style="font-size: 20px; color: #fff;">
                            Atentamente, <br>
                            <strong>Abril Guzmán Barrera</strong>
                        </p>
                        </div>
                     </div>
                   </div>
            <footer style="text-align: center; margin-top:5px">
                @Todos los derechos reservados de BienesRaices_230499
            </footer>
        `,
    });
}
export { registerEmail, passwordRecoveryEmail };
