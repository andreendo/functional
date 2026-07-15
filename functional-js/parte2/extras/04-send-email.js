import nodemailer from 'nodemailer';


// criar uma conta de teste em https://ethereal.email

async function main() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'damion36@ethereal.email',
            pass: 'EqZh6YbCf4VBDDyVEB'
        }
    });

    const info = await transporter.sendMail({
        from: '"Otto Schinner" <otto.schinner94@ethereal.email>',
        to: 'andreendo@gmail.com',
        subject: 'Hello from Otto 2',
        text: 'Hi Andre, hope you are doing fine. \nI just wanna say hello! \nRegards,\nOtto'
    });

    console.log('Message ID:', info.messageId);
    console.log('Message URL:', nodemailer.getTestMessageUrl(info));
}

main().catch(console.log);