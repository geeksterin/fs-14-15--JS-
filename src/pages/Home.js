import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrendingMovie from "../components/TrendingMovie";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <TrendingMovie />
      <Footer />
    </div>
  );
};

export default Home;
