// const eexpress=require('express');
// const app=eexpress();

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://harsh:harsh123@cluster0.dg1yr4e.mongodb.net/testing?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser:true,
    useUnifiedTopology:true

})
.then(() => console.log("connection succesfully...."))
.catch((err)=> console.log(err));

//schema
//a moongooes schema defines the structure of the document

const listSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true
    },

    active: Boolean,

    date:
    {
        type:Date,
        default:Date.now
    }



})

//a moongooes model is a wrapper on the moongooes schema
// moongooes model provides an interface to the datbase for creting quering updating etc

//collection creation

//so imp when we pass const variable its calls class

//so it should be satart with caps

const Details = new mongoose.model("Details", listSchema);
//details paarameter is a name of collectoion name and its only define singular form


//create document or insert

const createDocument = async () => {
   try{
    const details1 = new Details ({
        name: "harsh kaushik",
        email: "harsh@gmail.com",
        active:true
      })

      //first method to save data
      //details 1.save() thihs will save the current details

      const details2 = new Details ({
        name: "pinki kaushik",
        email: "pinki@gmail.com",
        active:true
      })

      const details3 = new Details ({
        name: "mavi kaushik",
        email: "mavi@gmail.com",
        active:true
      })
      const result = await Details.insertMany([details1, details2 , details3]);
      console.log(result);
   } catch(err){
    console.log(err);
   }
};
 createDocument();

