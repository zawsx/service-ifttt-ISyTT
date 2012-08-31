var nodemailer = require('nodemailer');

module.exports = function(email, to) {
  var gmail = {user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASSWORD};
  var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
      user: gmail.user,
      pass: gmail.password
    }
  });
  var mailOptions = {
    to: email.to,
    subject: email.subject,
    text: email.message
  };
  smtpTransport.sendMail(mailOptions, function(error, response){
  });
  smtpTransport.close();
};

