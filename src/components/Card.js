import React from "react";

export const Card = ({ movie }) => {
  return (
    <div className="flex justify-center m-1">
      <div className="border shadow rounded">
        <img
          className="rounded"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="photoImage"
        />
        <p>{movie.original_title}</p>
      </div>
    </div>
  );
};
