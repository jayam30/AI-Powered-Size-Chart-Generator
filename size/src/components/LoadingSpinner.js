import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="w-16 h-16 border-4 border-t-4 border-black border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
