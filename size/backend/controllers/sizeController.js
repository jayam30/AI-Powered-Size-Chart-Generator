const aiService = require('../services/aiService');

exports.recommendSize = async (req, res) => {
    const { height, weight, chest, waist, hips } = req.body;
    try {
        const recommendation = await aiService.getRecommendation({ height, weight, chest, waist, hips });
        res.json(recommendation);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching size recommendation' });
    }
};
