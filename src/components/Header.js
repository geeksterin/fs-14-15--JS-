import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  function redirectToSearch() {
    if (searchInput !== "") {
      navigate(`/search/${searchInput}`);
    }
  }

  return (
    <div className="flex justify-center m-5">
      <input
        className="border text-center"
        type="text"
        placeholder="search your movie"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <button
        className="bg-green-500 text-white p-1 ml-2 rounded"
        onClick={redirectToSearch}
      >
        search
      </button>
    </div>
  );
};

export default Header;
