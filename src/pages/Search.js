import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink, useParams } from "react-router-dom";
import { fetchApi } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovie } from "../slice/movieSlice";
import { Card } from "../components/Card";
import Skeleton from "react-loading-skeleton";

const Search = () => {
  const { movie } = useParams();
  const movies = useSelector((state) => state.movieSlice.searchMovie);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  async function searchMovie() {
    try {
      setIsLoading(true);
      const result = await fetchApi(
        `https://api.themoviedb.org/3/search/multi?query=${movie}&page=1`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );

      dispatch(setSearchMovie(result.data.results));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    searchMovie();
  }, []);

  console.log(movies);

  return (
    <div>
      <Navbar />
      <div
        style={{ width: "100%" }}
        className="flex justify-center flex-wrap gap-2"
      >
        {isLoading ? (
          <div
            style={{
              width: "100%",
              height: "20rem",
            }}
          >
            <Skeleton height={200} count={1} />
          </div>
        ) : (
          <>
            {movies.map((movie) => {
              return (
                <div key={movie.id} className="w-1/4 flex flex-wrap">
                  <NavLink to={`/movie/${movie.id}`}>
                    <Card movie={movie} />
                  </NavLink>
                </div>
              );
            })}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
