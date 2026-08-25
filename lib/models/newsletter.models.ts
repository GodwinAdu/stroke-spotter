import mongoose from "mongoose";



// Page Schema
const newsletterSchema = new mongoose.Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId, // Assuming you want to link content to a user
    ref: 'User', // Assuming you have a User model
  },
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true
  },
  blocks: {
    type: String
  }, // An array of block subdocuments
  createdDate: {
    type: Date,
    default: Date.now
  }
});




const Newsletter = mongoose.models.Newsletter || mongoose.model("Newsletter", newsletterSchema);

export default Newsletter;
