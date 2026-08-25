import mongoose from "mongoose";



// Page Schema
const feedbackSchema = new mongoose.Schema({
 
  description: {
    type: String,
    required: true
  },
  
  createdDate: {
    type: Date,
    default: Date.now
  }
});




const Feedback = mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);

export default Feedback;
