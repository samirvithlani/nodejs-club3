const mailer = require('nodemailer');


const sendMail = (to)=>{

    const transporter = mailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth:{
            user:"samir.royal4all@gmail.com",
            pass:"doqlxxmlnrwgbgnq"

        }
    })

    const options = {
        from: 'samir.royal4all@gmail.com',
        to: to,
        subject: 'Test',
        html: '<h1>HELLO THIS IS TEST MAIL</h1>',
        attachments: [
            {
                filename: 'test.png',
                content: 'Hello World!',
                path: 'C:\\Users\\Samir\\Desktop\\Samir Vithlani.png'
            }
        ]
    }

    transporter.sendMail(options,(err,info)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Email sent: ' + info.response)
        }
    })

}
module.exports = {sendMail};