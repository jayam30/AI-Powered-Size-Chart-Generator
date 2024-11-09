const axios = require('axios');

exports.getRecommendation = async (data) => {
    const response = await axios.post('http://localhost:5001/recommend', data);
    return response.data;
};
