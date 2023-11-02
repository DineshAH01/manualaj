

const express = require('express')
const bodyparser = require('body-parser');

const nodeMailer = require('nodemailer')


const cont = express();


cont.use(express.static("book-shop"));     /* take the contact folder  */

cont.use(bodyparser.urlencoded({extended: true}));


cont.get("/",(req,res)=>{

  res.sendFile(__dirname + "/index.html");
  console.log(__dirname);
 
});


cont.post("/",(req,res)=>{

  const msg =req.body.message;
  const name = req.body.nameofperson;
  const mail = req.body.gmail;
  const phone = req.body.phone;

  let transporter = nodeMailer.createTransport({

     service:"gmail",
     auth: { 
        user:"thisaitechnologies@gmail.com",
        pass:"rvdccvxdvrtqwvxp",                /* this password is not a mail password - mail id -2step verification on - app password - nodemailer - create - generate the code password    */

     }     

  })  

  var mailoption = {

     from: "thisaitechnologies@gmail.com",
     to: req.body.gmail,
     cc: "thisaitechnologies@gmail.com",
     subject: "book request from " + name,
     text: "Thanks for your message " + msg,
     html: `
     <p><strong>Name:</strong> ${name}</p>
     <p><strong>Email:</strong> ${mail}</p>
     <p><strong>Phone:</strong> ${phone}</p>
     <p><strong>Message:</strong></p>
     <p>${msg}</p>
   `,
     
  };


 transporter.sendMail(mailoption,(error,info)=>{

      if (error){
        console.log(error);
      }
      else{
        res.redirect('/')   
        console.log('email send' + info.response)
      }

 })

});







cont.listen(2000,()=>{

   console.log("server will be activate ")

})
