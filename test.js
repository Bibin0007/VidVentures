import { cb, message, transporter } from "./config/otpConfig.js";

const test = ()=>{
const html = `<p>Hello, this is a test email sent ${token} from Node.js using Nodemailer!</p><p>Here\'s a <a href="https://example.com">link</a> for you to check out.</p>`
    const newmessage = message("vfcvijin@gmail.com","testing",html)

    transporter.sendMail(newmessage,cb)
}
test();

