var nodeMailer=require('nodemailer');
var transport=nodeMailer.createTransport({
    host:'smtp.gmail.com', //simple mail transfer protocol (smpt)? smtp is use send to send ans recive email
    port:587,
    secure:false,
    requireTLS:true, 
    auth:
    {
        user:'harshkaushik9213466015@gmail.com',
        pass:'phwd vztb icql dmsg'
    }

});

var mailOptions = {
    from: 'harshkaushik9213466015@gmail.com',
    to: 'dheerajjeena930@gmail.com',
    subject:'node mail',
    text: "sudhar ja dheerj bhadwee",
}
transport.sendMail(mailOptions,function(error,info)
{
    if(error)
    {
        console.log(error);

    }
    else{
        console.log('email has been send',info.response);
    }
})