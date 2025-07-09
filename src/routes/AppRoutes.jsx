import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import AttemptedTestsPage from "../pages/AttemptedTestsPage";
import OrderHistoryPage from "../pages/OrderHistoryPage";

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/attempted-tests" />} />
      <Route path="/attempted-tests" element={<AttemptedTestsPage />} />
      <Route path="/order-history" element={<OrderHistoryPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
