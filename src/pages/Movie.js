import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchApi } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { setMovie, setGenres } from "../slice/movieSlice";
import { NavLink } from "react-router-dom";
import { Card } from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";

const Movie = () => {
  const dispatch = useDispatch();
  const { movie, genres } = useSelector((state) => state.movieSlice);
  const [page, setPage] = useState(1);
  const [totolPage, setTotalPage] = useState(2);

  async function fetchMovie() {
    const data = await fetchApi(`https://api.themoviedb.org/3/discover/movie`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    });
    dispatch(setMovie(data.data.results));
    setTotalPage(data.data.total_pages);
  }

  async function fetchGenres() {
    const data = await fetchApi(
      `https://api.themoviedb.org/3/genre/movie/list`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      }
    );

    const filteredData = data.data.genres.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });

    dispatch(setGenres(filteredData));
  }

  useEffect(() => {
    fetchMovie();
    fetchGenres();
  }, []);

  async function fetchMoviePerPage() {
    const data = await fetchApi(
      `https://api.themoviedb.org/3/discover/movie?page=${page}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      }
    );
    const newMovie = [...movie, ...data.data.results];
    dispatch(setMovie(newMovie));
    setPage((prev) => prev + 1);
    setTotalPage(data.data.total_pages);
  }

  useEffect(() => {
    fetchMoviePerPage();
  }, []);

  const [selectedOption, setSelectedOption] = useState(null);

  async function fetchFilteredMovie() {
    let params = "";
    if (selectedOption.length > 0) {
      selectedOption.forEach((item) => {
        params += item.value + ",";
      });
    }

    const data = await fetchApi(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${params}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      }
    );
    dispatch(setMovie(data.data.results));
    setTotalPage(data.data.total_pages);
  }

  useEffect(() => {
    if (selectedOption) {
      fetchFilteredMovie();
    }
  }, [selectedOption]);

  return (
    <div>
      <Navbar />

      <div
        style={{
          width: "100%",
        }}
        className="flex justify-center m-4"
      >
        <Select
          className="w-1/4"
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e);
          }}
          isMulti
          options={genres}
        />
      </div>

      <InfiniteScroll
        dataLength={totolPage} //This is important field to render the next data
        next={fetchMoviePerPage}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {movie.map((movie) => {
          return (
            <div
              style={{
                width: "20rem",
                height: "20rem",
              }}
            >
              <NavLink key={movie.id} to={`/movie/${movie.id}`}>
                <Card movie={movie} />
              </NavLink>
            </div>
          );
        })}
      </InfiniteScroll>

      <Footer />
    </div>
  );
};

export default Movie;
