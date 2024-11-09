import React, { useState } from 'react';
import bgImage from './../components/assets/bg.jpg';  // Import the image

const SizeRecommendation = () => {
  const [userInput, setUserInput] = useState({ height: '', weight: '' });
  const [recommendedSize, setRecommendedSize] = useState('');
  const [accuracy, setAccuracy] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const getSizeRecommendation = () => {
    const { height, weight } = userInput;

    if (!height || !weight) {
      alert('Please enter both height and weight.');
      return;
    }

    const heightInCm = parseInt(height);
    const weightInKg = parseInt(weight);

    let size = '';
    let recommendationAccuracy = 0;

    if (heightInCm >= 150 && heightInCm <= 160 && weightInKg >= 40 && weightInKg <= 50) {
      size = 'S';
      recommendationAccuracy = 80;
    } else if (heightInCm >= 160 && heightInCm <= 170 && weightInKg >= 50 && weightInKg <= 60) {
      size = 'M';
      recommendationAccuracy = 85;
    } else if (heightInCm >= 170 && heightInCm <= 180 && weightInKg >= 60 && weightInKg <= 75) {
      size = 'L';
      recommendationAccuracy = 90;
    } else if (heightInCm >= 180 && heightInCm <= 190 && weightInKg >= 75 && weightInKg <= 90) {
      size = 'XL';
      recommendationAccuracy = 75;
    } else {
      size = 'Size recommendation not available for this height and weight.';
      recommendationAccuracy = 50;
    }

    setRecommendedSize(size);
    setAccuracy(recommendationAccuracy);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImage})` }} // Use the imported image here
      ></div>

      {/* Overlay for content visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div> {/* Adjust overlay opacity if needed */}

      {/* Main content */}
      <div className="relative z-20 flex flex-col justify-center items-center p-6">
        <h1 className="text-4xl font-semibold mb-6 text-center text-white">Size Recommendation</h1>

        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Enter Your Details</h2>
          <div className="mb-6">
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height (in cm)</label>
            <input
              type="number"
              id="height"
              name="height"
              value={userInput.height}
              onChange={handleInputChange}
              placeholder="Enter height in cm"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight (in kg)</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={userInput.weight}
              onChange={handleInputChange}
              placeholder="Enter weight in kg"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            onClick={getSizeRecommendation}
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Get Size Recommendation
          </button>
        </div>

        {/* Display recommended size */}
        {recommendedSize && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-center text-white">
              Recommended Size: <span className="text-green-600">{recommendedSize}</span>
            </h3>
          </div>
        )}

        {/* Accuracy Progress Bar */}
        {recommendedSize && (
          <div className="w-full max-w-lg mt-4">
            <label htmlFor="accuracy" className="block text-sm font-medium text-gray-700">Recommendation Accuracy</label>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600">
                    {accuracy}% Accuracy
                  </span>
                </div>
              </div>
              <div className="flex mb-2">
                <div className="relative flex w-full flex-col">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <div className="w-full bg-gray-200 rounded-full">
                        <div className="flex mb-2">
                          <div
                            className="bg-teal-600 text-xs leading-none py-1 text-center text-teal-100 rounded-full"
                            style={{ width: `${accuracy}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sync with eCommerce Platforms */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
            onClick={() => alert('Sync with Amazon')}
          >
            Sync with Amazon
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={() => alert('Sync with Flipkart')}
          >
            Sync with Flipkart
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
            onClick={() => alert('Sync with Nykaa')}
          >
            Sync with Nykaa
          </button>
        </div>
      </div>
    </div>
  );
};

export default SizeRecommendation;
