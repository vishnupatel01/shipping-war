import nodemailer from "nodemailer";

function sendMail(email,password)
{
    
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vilekhofficial@gmail.com',
        pass: 'ujnwgyxrgswgvlsz'
      }
    });
    
    var mailOptions = {
      from: 'vilekhofficial@gmail.com',
      to: email,
      subject: 'Verification Email Shipping War',
      html: "<h1>Welcome to Shipping War</h1><p>You have successfully registered to our site , your login credentials are attached below</p><h2>Username : "+email+"</h2><h2>Password : "+password+"</h2><h1>Click on the link below to verify account</h1><a href='http://localhost:5173/verify/"+email+"'>Click to verify....</a>"
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}

export default sendMail;