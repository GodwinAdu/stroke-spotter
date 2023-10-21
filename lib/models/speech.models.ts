import mongoose from "mongoose";

// Page Schema
const speechSchema = new mongoose.Schema({
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
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

const Speech = mongoose.models.Speech || mongoose.model("Speech", speechSchema);


export default Speech;
