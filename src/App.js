import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import SubmitReflection from "./pages/SubmitReflection";
import PointsDashboard from "./pages/PointsDashboard";
import RewardsStore from "./pages/RewardsStore";
import Navbar from "./components/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✨ Separate wrapper component to use `useLocation` inside
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/reflect" element={<PageWrapper><SubmitReflection /></PageWrapper>} />
        <Route path="/dashboard" element={<PageWrapper><PointsDashboard /></PageWrapper>} />
        <Route path="/rewards" element={<PageWrapper><RewardsStore /></PageWrapper>} />
        <Route path="/onboarding" element={<PageWrapper><Onboarding /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

// ✨ Animation wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
       <ToastContainer position="top-center" autoClose={2000} />
    </Router>
  );
}

export default App;
