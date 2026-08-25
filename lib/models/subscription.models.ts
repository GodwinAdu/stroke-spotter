import mongoose from "mongoose";



// Page Schema
const subscriptionSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
  
    createdDate: {
        type: Date,
        default: Date.now
    }
});




const Subscription = mongoose.models.Subscription || mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
