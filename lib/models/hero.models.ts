import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
    mainTitle: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    image: { // Optional: If you want to include a background or feature image for the hero section
        type: String, // assuming the image is stored as a URL or file path
        default: null
    }
});

const Hero = mongoose.models.Hero || mongoose.model("Hero", heroSchema);

export default Hero;
