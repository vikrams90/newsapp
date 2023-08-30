import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NewsProvider } from "./context/NewsContext/NewsContext";
import Nav from "./components/Nav/Nav";
import NewsSection from "./components/NewsSection/NewsSection";
import Header from "./components/Header/Header";
import Fav from "./pages/Fav";
import Navbar from "./components/Nav/Navbar";
import { WeatherProvider } from "./context/WeatherContext/WeatherContext";

const App = () => {
  return (
    <Router>
      <NewsProvider>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Nav />
                <Header />
                <WeatherProvider>
                  <NewsSection />
                </WeatherProvider>
              </>
            }
          />
          <Route
            path='/fav'
            element={
              <>
                <Navbar />
                <Fav />
              </>
            }
          />
        </Routes>
      </NewsProvider>
    </Router>
  );
};

export default App;
