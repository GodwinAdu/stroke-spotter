import mongoose from "mongoose";


const blockSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['heading', 'paragraph'], // You can extend this enum for other types
    required: true
  },
  value: {
    type: String,
    required: true
  },
  level: { // Only relevant for 'heading' type
    type: Number,
    enum: [1, 2, 3, 4, 5, 6], // Representing H1 to H6
    required: function() {
      return this.type === 'heading';
    }
  },
  style: { // Only relevant for 'paragraph' type. This example allows only one style. You can adjust for multiple.
    type: String,
    enum: ['normal', 'bold', 'italic'], // You can extend this for other styles
    required: function() {
      return this.type === 'paragraph';
    }
  }
});

const contentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Assuming you want to link content to a user
    ref: 'User', // Assuming you have a User model
    required: true
  },
  blocks: [blockSchema], // An array of blocks
  createdDate: {
    type: Date,
    default: Date.now
  }
  // Any other meta-data you might want to track...
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
