const email = require('nodemailer');
require('dotenv').config();

const Pomagaci = {};

Pomagaci.sendEmail = (userData, callback) => {
    
const posaljilac = email.createTransport({ // ovo je secret env auth
    //service: //process.env.EMAIL_SERVICE, // ovo za sada ostavi ovako
    host: 'smtp.ethereal.email',
    port: 578,
    auth: {
        user: 'rafael.lynch50@ethereal.email',//process.env.EMAIL_USER ,
        pass: '8mj8U8Zn1WEzgeJjdb'//process.env.EMAIL_PASSWORD
    }
});


const mailOptions = { // ovo dobijamo iz parametara funkcija
    from: 'rafael.lynch50@ethereal.email',
    to: 'dusan.andrejevic996@hmail.com', //userData.email,
    subject: 'registracija',
    html: `
        <h1>Welcome ${'Dusan'}</h1>
        <p>Congrats on the registracion be free to purchase any stuff you need</p>
        <button>Go to page</button>
    `
};


posaljilac.sendMail(mailOptions, (err, info) => {
        if(!err) {
            callback({'Succes': 'Mail has been sent'});
        }else {
            callback({'Error': err});
        }       
});

}

module.exports = Pomagaci;