const express = require('express');
const cors = require('cors');
const sendMail = require('./mail'); // mailer.js file

const app = express();

app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    await sendMail(name, email, message);
    res.status(200).json({ success: true, message: '✅ Message sent successfully!' });
  } catch (error) {
    console.error('Email send failed:', error);
    res.status(500).json({ success: false, message: '❌ Failed to send message.' });
  }
});

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
