
async function mailerEnviaEmail(email, sugestao, aluno) {
    "use strict";
    const nodemailer = require("nodemailer");

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // Generate test SMTP service account from ethereal.email

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // verdadeiro para portas 465, 587 = false
            logger: true,
            secureconnection: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.SENHA_EMAIL_USER
            },
            tls: {
                rejectUnAuthorized: true
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: email, // sender address
            to: process.env.EMAIL_ENVIAR, // list of receivers
            subject: "sugestão✔", // Subject line
            text: "sugestão", // plain text body
            html: sugestao + '<br><br><strong>enviado por </strong>' + aluno, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);

}

module.exports = {
    mailerEnviaEmail
}