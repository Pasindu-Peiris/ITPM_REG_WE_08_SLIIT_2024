const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "it21826740@my.sliit.lk", // Your Gmail email address
    pass: "200050404648", // Your Gmail password
  },
});

const sendEmail = (name, email, callback) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: "Congratulations! You're a Winner!",
    html: `<p>Dear ${name},</p>
    <p>We are thrilled to inform you that your problem has been successfully resolved. Thank you for reaching out to us!</p>
    <p>Best regards,</p>
    <p>The Support Team</p>`,
   
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error); // Log the error here
      callback(error, null);
    } else {
      console.log('Email sent:', info.response);
      callback(null, info);
    }
  });
}

module.exports = sendEmail;
