import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Missdirection from './pages/404';
import Closeup from "./pages/Closeup";
import Contact from './pages/Contact'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/closeup/:id" element={<Closeup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/404" element={<Missdirection />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default AppRouter;
