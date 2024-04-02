import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "../components/Card";
import { NavLink } from "react-router-dom";
import { fetchApi } from "../utils/api";
import { setTopRated } from "../slice/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((state) => state.movieSlice.topRated);

  async function GetData() {
    const data = await fetchApi(
      "https://api.themoviedb.org/3/movie/top_rated",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      }
    );
    dispatch(setTopRated(data.data.results));
    // console.log(data.data.results);
  }

  useEffect(() => {
    GetData();
    console.log("from redux", topRatedMovies);
  }, []);

  return (
    <div>
      <Navbar />
      Home
      {topRatedMovies.map((movie) => {
        return (
          <NavLink key={movie.id} to={`/movie/${movie.id}`}>
            <Card movie={movie} />
          </NavLink>
        );
      })}
      <Footer />
    </div>
  );
};

export default Home;
