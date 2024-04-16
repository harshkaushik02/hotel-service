const mongoose = require('mongoose')


const contactSchema = mongoose.Schema({
    f_name: {
        type: String,
        required: true
    },


    email: {
        type: String,
        required: true
    },

    contact: {
        type: Number,
        
    },

    massage: {
        type: String,
        required: true
    },



})



const contactSchema1 = new mongoose.model("contact", contactSchema);
module.exports = contactSchema1;