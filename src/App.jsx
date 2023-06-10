import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToHashElement from "./components/ScrollToHashElement";

import "@fontsource/playfair-display";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/400-italic.css";

import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './router'

const App = () => {
  return (
    <Router>
      <div>
        <ScrollToHashElement />
        <div className="sticky-header" style={{ position: "sticky", top: 0, zIndex:50 }}>
          <Header/>
        </div>
        <AppRouter />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
