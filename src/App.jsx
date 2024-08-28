import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/home'; 
import Cars from './pages/cars'; 
import SingleCar from './pages/single-card'; 
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cars" element={<Cars />} />
        <Route path="cars/id" element={<SingleCar />} />
      </Routes>
    </div>
  );
}

export default App;
