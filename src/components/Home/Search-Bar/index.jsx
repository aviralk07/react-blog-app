import React from "react";
import "./style.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
const SerchBar = ({ value, handelSearchKey, clearSearch, formSubmit }) => {
  return (
    <div className="searchBar-warp ">
      <form onClick={formSubmit}>
        <div class="search">
          <input
            type="text"
            onChange={handelSearchKey}
            placeholder="Search By Category"
            value={value}
            class="searchTerm"
          />
          {value && <span onClick={clearSearch}>X</span>}
          <button type="submit" class="searchButton">
            <FaMagnifyingGlass /> Go
          </button>
        </div>
      </form>
    </div>
  );
};

export default SerchBar;
