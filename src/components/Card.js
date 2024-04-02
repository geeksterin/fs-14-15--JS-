import React from "react";

export const Card = ({ movie }) => {
  return (
    <div className="flex justify-center">
      <div className="border w-1/6 h-1/8 shadow rounded">
        <img
          className="rounded"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="image"
        />
      </div>
    </div>
  );
};
