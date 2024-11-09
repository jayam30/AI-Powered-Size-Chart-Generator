const SizeChart = require('../models/SizeChart');

exports.getSizeChart = async (req, res) => {
    try {
        const charts = await SizeChart.find();
        res.json(charts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving size charts' });
    }
};
