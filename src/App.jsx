import React, { useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// Layout
import RootLayout from './layout/RootLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Listings from './pages/Listings';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SplashPage from './components/SplashPage';

// Create the router outside of the component
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="listings" element={<Listings />} /> 
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  const [loading, setLoading] = useState(true);

  const handleAnimationComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <SplashPage onAnimationComplete={handleAnimationComplete} />;
  }

  return <RouterProvider router={router} />;
}

export default App;
