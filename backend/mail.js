const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: 'apikey', // literally this string
    pass: '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' // your real API key here
  }
});

const sendMail = async (name, userEmail, message) => {
  const mailOptions = {
    from: 'indu78980@gmail.com',
    to: 'krishnanu5836@gmail.com',
    subject: `New message from ${name}`,
    text: `
      Name: ${name}
      Email: ${userEmail}
      Message: ${message}
    `,
    replyTo: userEmail
  };

  // Send mail and just return nothing
  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
