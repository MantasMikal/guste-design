const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')
const Email = require('email-templates')

// const transporter = nodemailer.createTransport(
//   mg({
//     auth: {
//       api_key: process.env.MAILGUN_TOKEN,
//       domain: 'sandboxe796a32280c54800ab5158c6f4ce20f4.mailgun.org'
//     }
//   })
// )

exports.handler = async function (event) {
  console.log(event.queryStringParameters)
  const { email } = event.queryStringParameters
  const mail = new Email({
    message: {
      from: "example@example.com",
      subject: 'Subject'
    }
  })

  mail
  .send({
    template: 'whitepaper',
    message: {
      to: email
    },
    transport: {
      auth: {
        api_key: process.env.MAILGUN_TOKEN,
        domain: 'sandboxe796a32280c54800ab5158c6f4ce20f4.mailgun.org'
      }
    },
  })
  .then(console.log)
  .catch(console.error);


  return {
    statusCode: 200,
    body: `Email sent`
  }
}
