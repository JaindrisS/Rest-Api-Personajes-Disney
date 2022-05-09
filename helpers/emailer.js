const nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");
const template = require("../public/template");

// funcion de trasnporte para el envio de mensajes
const createTrans = () => {
  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: process.env.SENDGRID_API_KEY,
    })
  );

  // const transport = nodemailer.createTransport({
  //   host: "smtp.mailtrap.io",
  //   port: 2525,
  //   auth: {
  //     user: "ce46caac1c6079",
  //     pass: "6eea12314c04de",
  //   },
  // });
  return transport;
};

// funcion que se encarga de disparar el correo

const sendMail = async (user) => {
  let transporter = createTrans(); //Retorna el transporte que vamos a utilizar

  let info = await transporter.sendMail({
    from: "jaindrissosajsd@gmail.com", // Desde donde se envia el correo
    to: `${user.correo}`, // Receptor del correo
    subject: `Hola ${user.nombre} Gracias por registrarte`, // Subject line
    // text: "Hello world?", // plain text body
    html: template, // html body
    attachments: [
      {
        filename: "license.txt",
        path: "https://raw.github.com/nodemailer/nodemailer/master/LICENSE",
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
  return;
};

module.exports = { sendMail };

