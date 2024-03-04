const { SESClient, SendTemplatedEmailCommand } = require("@aws-sdk/client-ses");
require('dotenv').config();
 
const SES_CONFIG = {
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: process.env.AWS_SES_REGION,
};

//Create SES service object.
const sesClient = new SESClient(SES_CONFIG);

const sendMail = async (templateName, recipientEmail) => {
    const sendTemplatedEmailCommand = new SendTemplatedEmailCommand({
        /**
         * Aquí tienes un ejemplo de cómo un template sería reemplazado con datos de usuario:
         * Template: <h1>Hola {{contacto.nombre}},</h1><p>¡No te olvides de los regalos para la fiesta!</p>
         * Destino: <h1>Hola Bilbo,</h1><p>¡No te olvides de los regalos para la fiesta!</p>
         */
        Destination: {
            ToAddresses: [
                recipientEmail
            ],
        },
        Source: process.env.AWS_SES_SENDER,
        Template: templateName,
        TemplateData: JSON.stringify({ name: 'Adrian Felix' }),
    });

    try {
        const res = await sesClient.send(sendTemplatedEmailCommand);
        console.log('Email con SES ha sido enviado!', res);
    } catch (err) {
        console.error("Fallo al crear el Template.", err);
    }
}

sendMail("SES-Template", "guerofelix234@gmail.com")