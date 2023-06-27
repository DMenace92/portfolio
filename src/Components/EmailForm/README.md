To create an Express messenger in your website that allows users to send emails to your personal email account, you can follow these steps:

1. Set up your Express.js project: Create a new Express.js project or use an existing one. Make sure you have Express.js installed by running `npm install express` in your project directory.

2. Create an HTML form: In your HTML file, create a form that includes input fields for the sender's name, email, message subject, and message content. Add an action attribute to the form that points to the Express route where you'll handle the form submission.

```html
<form action="/send-email" method="POST">
  <input type="text" name="senderName" placeholder="Your Name" required>
  <input type="email" name="senderEmail" placeholder="Your Email" required>
  <input type="text" name="subject" placeholder="Subject" required>
  <textarea name="message" placeholder="Message" required></textarea>
  <button type="submit">Send Email</button>
</form>
```

3. Set up the Express route: In your server-side JavaScript file, set up a route that handles the form submission. This route will extract the form data and use Nodemailer to send the email to your personal email account.

```javascript
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route to handle form submissions
app.post('/send-email', (req, res) => {
  const { senderName, senderEmail, subject, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  // Define email options
  const mailOptions = {
    from: senderEmail,
    to: 'your-personal-email@example.com',
    subject: subject,
    text: `Name: ${senderName}\nEmail: ${senderEmail}\nMessage: ${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

4. Customize Nodemailer configuration: In the code snippet above, replace `'your-email@gmail.com'` with your actual email address and `'your-email-password'` with your email account password. Also, adjust `'your-personal-email@example.com'` to your personal email account address.

5. Start the server: Run your Express server by executing `node server.js` (assuming your server file is named `server.js`). The server will start listening on port 3000.

Once your server is running and the form is submitted, the Express route will handle the form data, create a Nodemailer transporter, and send the email to your personal email account using the provided details.

Make sure to handle any necessary error checking and validation to ensure that the form data is properly processed and that emails are sent successfully.

Note: When working with sensitive data such as email passwords, it is recommended to use environment variables or other secure methods to store and access the information,