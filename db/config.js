const mongoose=require('mongoose');

var conn=mongoose.connect("mongodb+srv://harsh:harsh123@cluster0.dg1yr4e.mongodb.net/testing?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser:true,
    useUnifiedTopology:true

})

.then(()=>console.log("connection successfully"))
.catch((err)=>console.log(err));

module.exports = conn;