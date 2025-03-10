"use client";
import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-2 border-gray-300 rounded-md p-1"
      />
      <button className="bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer">
        검색
      </button>
    </div>
  );
};

export default SearchBar;
