import React, { useState } from 'react';

const SizeForm = ({ onSubmit }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bust, setBust] = useState('');
  const [waist, setWaist] = useState('');
  const [hips, setHips] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ height, weight, bust, waist, hips });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-lg mx-auto">
      <input 
        type="number" 
        placeholder="Height (cm)" 
        value={height} 
        onChange={(e) => setHeight(e.target.value)} 
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input 
        type="number" 
        placeholder="Weight (kg)" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)} 
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input 
        type="number" 
        placeholder="Bust (cm)" 
        value={bust} 
        onChange={(e) => setBust(e.target.value)} 
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input 
        type="number" 
        placeholder="Waist (cm)" 
        value={waist} 
        onChange={(e) => setWaist(e.target.value)} 
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input 
        type="number" 
        placeholder="Hips (cm)" 
        value={hips} 
        onChange={(e) => setHips(e.target.value)} 
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded">
        Get Size Recommendation
      </button>
    </form>
  );
};

export default SizeForm;
