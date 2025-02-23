require('dotenv').config();

const nodemailer = require("nodemailer");
console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Pass:", process.env.EMAIL_PASS);
// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//     }
// });
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendEmail = async (toEmail, subject, message) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: toEmail,
            subject: subject,
            text: message
        };
        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Email Sent:", info.response);
    } catch (error) {
        console.error("❌ Error Sending Email:", error.message);
    }
};

const formSubmitController = async (req, res) => {
    const { name, email, phoneNumber, message } = req.body;
    const clientFormData = JSON.stringify({ name, email, phoneNumber, message },null,2);
    try {
        console.log("making request", name, email, phoneNumber, message);
        await sendEmail("ganeshvedha123@gmail.com", "New Client", clientFormData);//sauurabh02sonker@gmail.com
        return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error,,,could not send the mail" });
    }
};

module.exports = { formSubmitController };
