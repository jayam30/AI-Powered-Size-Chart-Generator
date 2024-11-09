import React from 'react';
import Header from './components/Header'; // Import without curly braces for default export
import Footer from './components/Footer';
import Home from './pages/Home';
import SizeRecommendation from './pages/SizeRecommendation';
import AdminDashboard from './pages/AdminDashboard'; // Default import
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom

const App = () => {
  return (
    <div>
      <Header />
      <Routes> {/* Use Routes for defining different paths */}
        <Route path="/" element={<Home />} /> {/* Route for Home */}
        <Route path="/size-recommendation" element={<SizeRecommendation />} /> {/* Route for Size Recommendation */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Route for Admin Dashboard */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App; // Ensure the default export
