import React from 'react';

const SizeChart = ({ sizeData }) => {
  return (
    <div className="space-y-4 p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold">Recommended Size Chart</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Size</th>
            <th className="border p-2">Chest (cm)</th>
            <th className="border p-2">Waist (cm)</th>
            <th className="border p-2">Hips (cm)</th>
            <th className="border p-2">Confidence</th>
          </tr>
        </thead>
        <tbody>
          {sizeData.map((size, index) => (
            <tr key={index}>
              <td className="border p-2">{size.name}</td>
              <td className="border p-2">{size.chest}</td>
              <td className="border p-2">{size.waist}</td>
              <td className="border p-2">{size.hips}</td>
              <td className="border p-2">{size.confidence}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SizeChart;
