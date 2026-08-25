import mongoose from "mongoose";



// Page Schema
const contactSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});




const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
