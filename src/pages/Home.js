import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector((state) => state);
  return (
    <div>
      Home
      {data.movieSlice.movie.map((movie) => {
        return (
          <div key={movie.id}>
            <p> name : {movie.name}</p>
            <p> type : {movie.type}</p>
            <p> rating : {movie.rating}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
