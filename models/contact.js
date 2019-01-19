const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
        required: true
    },

    message: {
        type: String,
        required: true
    }, 

    date: {
        type: Date,
        default: Date.now
    }
})

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;