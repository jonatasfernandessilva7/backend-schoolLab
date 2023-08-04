async function mailerEnviaEmail(email, sugestao, aluno) {
    "use strict";
    const nodemailer = require("nodemailer");
    async function main() {
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
        let info = await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_ENVIAR,
            subject: "sugestão✔",
            text: "sugestão",
            html: sugestao + '<br><br><strong>enviado por </strong>' + aluno,
        });
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    main().catch(console.error);
}

module.exports = {
    mailerEnviaEmail
}