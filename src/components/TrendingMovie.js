import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/Card";
import { NavLink } from "react-router-dom";
import { fetchApi } from "../utils/api";
import { setTopRated } from "../slice/movieSlice";
import ReactSimplyCarousel from "react-simply-carousel";
import Skeleton from "react-loading-skeleton";

const TrendingMovie = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((state) => state.movieSlice.topRated);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [switchMovie, setSwitchMovie] = useState("day");

  async function GetData() {
    setIsLoading(true);
    const data = await fetchApi(
      `https://api.themoviedb.org/3/trending/movie/${switchMovie}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      }
    );
    dispatch(setTopRated(data.data.results));
    setIsLoading(false);
  }

  useEffect(() => {
    GetData();
  }, [switchMovie]);

  return (
    <div>
      <div
        style={{
          width: "100%",
        }}
        className="flex justify-between"
      >
        <div>
          <h2>Trending</h2>
        </div>
        <div className="">
          <button
            onClick={() => {
              setSwitchMovie("day");
            }}
            className="m-2"
          >
            Day
          </button>
          <button
            onClick={() => {
              setSwitchMovie("week");
            }}
            className="m-2"
          >
            Week
          </button>
        </div>
      </div>
      <div className="mt-5">
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
          <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={1}
            itemsToScroll={1}
            forwardBtnProps={{
              //here you can also pass className, or any other button element attributes
              style: {
                alignSelf: "center",
                background: "black",
                border: "none",
                borderRadius: "50%",
                color: "white",
                cursor: "pointer",
                fontSize: "20px",
                height: 30,
                lineHeight: 1,
                textAlign: "center",
                width: 30,
              },
              children: <span>{`>`}</span>,
            }}
            backwardBtnProps={{
              //here you can also pass className, or any other button element attributes
              style: {
                alignSelf: "center",
                background: "black",
                border: "none",
                borderRadius: "50%",
                color: "white",
                cursor: "pointer",
                fontSize: "20px",
                height: 30,
                lineHeight: 1,
                textAlign: "center",
                width: 30,
              },
              children: <span>{`<`}</span>,
            }}
            responsiveProps={[
              {
                itemsToShow: 3,
                itemsToScroll: 3,
                minWidth: 768,
              },
            ]}
            speed={400}
            easing="linear"
          >
            {topRatedMovies.map((movie) => {
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
          </ReactSimplyCarousel>
        )}
      </div>
    </div>
  );
};

export default TrendingMovie;
