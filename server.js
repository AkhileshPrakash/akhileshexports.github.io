import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// POST endpoint for contact form
app.post('/contact', async (req, res) => {
  const { fullName, email, companyName, subject, message } = req.body;

  // Configure Nodemailer with your Gmail account and App Password
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'akhileshkrithiv555@gmail.com',
      pass: 'rmkvluolyavfnpbb' // Replace with your Gmail App Password
    }
  });

  const mailOptions = {
    from: email,
    to: 'akhileshkrithiv555@gmail.com',
    subject: `Contact Form: ${subject}`,
    text: `
      Name: ${fullName}
      Email: ${email}
      Company: ${companyName}
      Subject: ${subject}
      Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send email', error: err.toString() });
  }
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
