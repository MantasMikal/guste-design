const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

const transporter = nodemailer.createTransport(
  mg({
    auth: {
      api_key: process.env.MAILGUN_TOKEN,
      domain: 'sandboxe796a32280c54800ab5158c6f4ce20f4.mailgun.org',
    },
  }),
);

exports.handler = async function (event) {
  console.log(event.queryStringParameters)
  const { email } = event.queryStringParameters

  const info = await transporter.sendMail({
    from: 'myemail@example.com',
    to: email,
    subject: 'Your report is ready!',
    text: 'See attached report PDF',
  });

  console.log(`PDF report sent: ${info.messageId}`);
};