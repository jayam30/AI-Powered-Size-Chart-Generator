import React, { useState } from 'react';

const AdminDashboard = () => {
  // State to store the list of size recommendations
  const [sizeRecommendations, setSizeRecommendations] = useState([
    { id: 1, size: 'S', description: 'Small size for users with height 150-160 cm and weight 40-50 kg.' },
    { id: 2, size: 'M', description: 'Medium size for users with height 160-170 cm and weight 50-60 kg.' },
    { id: 3, size: 'L', description: 'Large size for users with height 170-180 cm and weight 60-75 kg.' },
    { id: 4, size: 'XL', description: 'Extra Large size for users with height 180-190 cm and weight 75-90 kg.' }
  ]);

  // State to handle input for new size recommendation
  const [newSize, setNewSize] = useState({ size: '', description: '' });

  const handleInputChange = (e) => {
    setNewSize({
      ...newSize,
      [e.target.name]: e.target.value
    });
  };

  // Function to add a new size recommendation
  const addSizeRecommendation = (e) => {
    e.preventDefault();
    if (newSize.size && newSize.description) {
      setSizeRecommendations([...sizeRecommendations, { ...newSize, id: sizeRecommendations.length + 1 }]);
      setNewSize({ size: '', description: '' }); // Reset input fields
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-semibold mb-6 text-center animate__animated animate__fadeIn">Admin Dashboard</h1>

      {/* Form for adding size recommendations */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center animate__animated animate__fadeInUp">Manage Size Recommendations</h2>
        
        <form onSubmit={addSizeRecommendation} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 animate__animated animate__fadeInUp">
          <div className="mb-4">
            <label htmlFor="size" className="block text-sm font-medium text-gray-300">Size</label>
            <input
              type="text"
              id="size"
              name="size"
              value={newSize.size}
              onChange={handleInputChange}
              placeholder="Enter size (e.g., S, M, L, XL)"
              className="mt-1 p-2 w-full border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-300">Description</label>
            <textarea
              id="description"
              name="description"
              value={newSize.description}
              onChange={handleInputChange}
              placeholder="Enter description for this size"
              className="mt-1 p-2 w-full border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              required
            />
          </div>
          
          <button type="submit" className="w-full p-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out">
            Add Size Recommendation
          </button>
        </form>

        {/* Displaying the current list of size recommendations */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center animate__animated animate__fadeInUp">Current Size Recommendations</h3>
          <ul className="mt-4 space-y-4">
            {sizeRecommendations.map((size) => (
              <li key={size.id} className="bg-gray-700 p-4 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <h4 className="font-semibold text-lg">{size.size}</h4>
                <p className="text-gray-300">{size.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
