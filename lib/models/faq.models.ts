import mongoose from "mongoose";


// Define the schema
const FaqSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true,
    },
    answer: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Faq = mongoose.models.Faq || mongoose.model("Faq", FaqSchema);

export default Faq;