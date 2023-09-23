import mongoose from "mongoose";


// Define the event schema
const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    time: {
        start: {
            type: String,
            required: true
        },
        end: {
            type: String,
            required: true
        }
    },
    description: {
        type: String,
        default: "",
    }
});

// Create the model from the schema
const Event = mongoose.models.Event || mongoose.model("Event", EventSchema);

export default Event;