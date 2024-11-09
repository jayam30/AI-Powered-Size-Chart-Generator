// models/SizeChart.js
const mongoose = require('mongoose');

const sizeChartSchema = mongoose.Schema({
    category: String,
    sizes: [
        {
            label: String,
            measurements: {
                height: Number,
                weight: Number,
                chest: Number,
                waist: Number,
                hips: Number,
            },
        },
    ],
});

module.exports = mongoose.model('SizeChart', sizeChartSchema);
