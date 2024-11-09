// import React, { useState, useEffect } from 'react';
// import bgImage from './../components/assets/bg.jpg'; // Import the local image

// const Home = () => {
//   const [userInfo, setUserInfo] = useState({
//     height: '',
//     weight: '',
//     bust: '',
//     waist: '',
//     hips: '',
//   });

//   const handleChange = (e) => {
//     setUserInfo({
//       ...userInfo,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('User Info Submitted:', userInfo);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const background = document.querySelector('.bg-3d');
//       background.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Parallax effect
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-cover bg-center overflow-hidden">
//       {/* 3D Background with local image */}
//       <div
//         className="bg-3d absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${bgImage})`, // Use the imported local image here
//         }}
//       ></div>

//       {/* Overlay for darkening the background */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-white text-center">
//         <h1 className="text-4xl font-semibold mb-4 animate__animated animate__fadeIn">Welcome to Size Chart Recommendation</h1>
//         <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-1s">
//           Find the perfect fit for your clothing size
//         </p>

//         <form onSubmit={handleSubmit} className="w-full max-w-lg bg-black bg-opacity-60 p-6 rounded-lg shadow-lg backdrop-blur-md">
//           <div>
//             <label htmlFor="height" className="block text-sm font-medium text-gray-200">Height (in cm)</label>
//             <input
//               type="number"
//               id="height"
//               name="height"
//               value={userInfo.height}
//               onChange={handleChange}
//               placeholder="Enter your height"
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="weight" className="block text-sm font-medium text-gray-200">Weight (in kg)</label>
//             <input
//               type="number"
//               id="weight"
//               name="weight"
//               value={userInfo.weight}
//               onChange={handleChange}
//               placeholder="Enter your weight"
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="bust" className="block text-sm font-medium text-gray-200">Bust (in cm)</label>
//             <input
//               type="number"
//               id="bust"
//               name="bust"
//               value={userInfo.bust}
//               onChange={handleChange}
//               placeholder="Enter your bust measurement"
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="waist" className="block text-sm font-medium text-gray-200">Waist (in cm)</label>
//             <input
//               type="number"
//               id="waist"
//               name="waist"
//               value={userInfo.waist}
//               onChange={handleChange}
//               placeholder="Enter your waist measurement"
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="hips" className="block text-sm font-medium text-gray-200">Hips (in cm)</label>
//             <input
//               type="number"
//               id="hips"
//               name="hips"
//               value={userInfo.hips}
//               onChange={handleChange}
//               placeholder="Enter your hip measurement"
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full p-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 transform hover:scale-105"
//           >
//             Get Size Recommendation
//           </button>
//         </form>

//         <div className="mt-8 text-lg text-gray-200">
//           <h2 className="font-semibold">Recommended Size: (Dynamic based on input)</h2>
//           {/* Dynamically display size recommendation based on user input */}
//           <p>Your recommended size will appear here.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



import React, { useState, useEffect } from 'react';
import bgVideo from './../components/assets/bg-video.mp4'; // Import the video file

const Home = () => {
  const [userInfo, setUserInfo] = useState({
    height: '',
    weight: '',
    bust: '',
    waist: '',
    hips: '',
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Info Submitted:', userInfo);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const background = document.querySelector('.bg-video');
      background.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Parallax effect
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="bg-video absolute top-0 left-0 w-full h-full object-cover object-center bg-fixed"
        autoPlay
        loop
        muted
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for darkening the background */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-white text-center">
        <h1 className="text-4xl font-semibold mb-4 animate__animated animate__fadeIn">Welcome to Size Chart Recommendation</h1>
        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Find the perfect fit for your clothing size
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-black bg-opacity-60 p-6 rounded-lg shadow-lg backdrop-blur-md">
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-200">Height (in cm)</label>
            <input
              type="number"
              id="height"
              name="height"
              value={userInfo.height}
              onChange={handleChange}
              placeholder="Enter your height"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
              required
            />
          </div>

          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-200">Weight (in kg)</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={userInfo.weight}
              onChange={handleChange}
              placeholder="Enter your weight"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
              required
            />
          </div>

          <div>
            <label htmlFor="bust" className="block text-sm font-medium text-gray-200">Bust (in cm)</label>
            <input
              type="number"
              id="bust"
              name="bust"
              value={userInfo.bust}
              onChange={handleChange}
              placeholder="Enter your bust measurement"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
              required
            />
          </div>

          <div>
            <label htmlFor="waist" className="block text-sm font-medium text-gray-200">Waist (in cm)</label>
            <input
              type="number"
              id="waist"
              name="waist"
              value={userInfo.waist}
              onChange={handleChange}
              placeholder="Enter your waist measurement"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
              required
            />
          </div>

          <div>
            <label htmlFor="hips" className="block text-sm font-medium text-gray-200">Hips (in cm)</label>
            <input
              type="number"
              id="hips"
              name="hips"
              value={userInfo.hips}
              onChange={handleChange}
              placeholder="Enter your hip measurement"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 transform hover:scale-105"
          >
            Get Size Recommendation
          </button>
        </form>

        <div className="mt-8 text-lg text-gray-200">
          <h2 className="font-semibold">Recommended Size: (Dynamic based on input)</h2>
          {/* Dynamically display size recommendation based on user input */}
          <p>Your recommended size will appear here.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
