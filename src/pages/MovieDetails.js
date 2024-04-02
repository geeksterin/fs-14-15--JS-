import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Navbar />
      MovieDetails {id}
      <Footer />
    </div>
  );
};

export default MovieDetails;
