const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    name: {
        type: String
      
    },

    l_name: {
        type: String
      
    },

 
    hotel: {
        type: String
    },

    image: {
        type: String
    }

    // money: {
    //     type: Number
       
    // }





})

const productSchema1 = new mongoose.model("product", productSchema);
module.exports = productSchema1;