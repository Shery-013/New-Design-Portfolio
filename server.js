const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3005;

// Set up body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Serve static files
app.use(express.static('public'));

// Endpoint for sending email
app.post('/send-email', upload.single('attachment'), (req, res) => {
    const { name, email,subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail', // Change to your email service
        auth: {
            user: 'abdur.bscs.57013@gmail.com', // Your email
            // pass: 'your_password',          // Your password or app password
        },
    });

    const mailOptions = {
        from: email,
        to: 'abdur.bscs.57013@gmail.com', // Your email to receive messages
        subject: 'New Contact Form Submission',
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>${subject}</p><p>Message: ${message}</p>`,
    };

    if (req.file) {
        mailOptions.attachments = [{
            filename: req.file.originalname,
            path: req.file.path,
        }];
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Message sent successfully!');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
