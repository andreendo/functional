const readFile = require('fs').promises.readFile;
const nodemailer = require('nodemailer');

const { waitFor } = require('./lib/func');

async function main() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'otto.schinner94@ethereal.email',
            pass: 'S22Pr2h6C8cKb8eVCK'
        }
    });

    const emails = (await readFile('res/emails.txt', 'utf-8')).split('\n');
    const subject = await readFile('res/titulo.txt', 'utf-8');
    const body = await readFile('res/corpo.txt', 'utf-8');
    for (let emailAdd of emails) {
        console.log('sending e-mail to:', emailAdd);
        const info = await transporter.sendMail({
            from: '"Otto Schinner" <otto.schinner94@ethereal.email>',
            to: emailAdd,
            subject,
            text: body
        });
        console.log('Message URL:', nodemailer.getTestMessageUrl(info));
        await waitFor(2000);
    }
}

main().catch(console.log);