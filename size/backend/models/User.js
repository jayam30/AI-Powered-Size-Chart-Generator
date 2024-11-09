const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bodyMeasurements: {
        height: Number,
        weight: Number,
        chest: Number,
        waist: Number,
        hips: Number,
    },
});

module.exports = mongoose.model('User', userSchema);
