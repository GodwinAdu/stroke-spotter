import mongoose from "mongoose";

const themeSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
        trim: true,
    },
    theme: {
        type: String,
        required: true,
        trim: true,
    }
});

const Theme = mongoose.models.Theme || mongoose.model("Theme", themeSchema);

export default Theme;
