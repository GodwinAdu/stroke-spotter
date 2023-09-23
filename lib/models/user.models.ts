const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    profileImage: {
        type: String, // assuming the image is stored as a URL or file path
        default: null
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+@.+\..+/, 'Please use a valid email address']
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'user', 'editor', 'etc'], // you can update the roles accordingly
    },
    duties: {
        type: [String], // using an array to allow multiple duties
    },
    profession: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    memberType: {
        type: String,
        enum: ['gold', 'silver', 'bronze', 'basic'], // example membership types, modify as needed
        default: 'basic',
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
