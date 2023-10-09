import mongoose from "mongoose";

// Training Post Schema
const trainingPostSchema = new mongoose.Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model for the user who posted this training
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  blocks: {
    type: String,
    required: true, // Assuming 'blocks' should not be empty
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.models.Post || mongoose.model("Post", trainingPostSchema);

export default Post;

