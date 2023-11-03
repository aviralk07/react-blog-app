import React from "react";
import Header from "../../components/Home/Header1";
import SerchBar from "../../components/Home/Search-Bar";
import BlogList from "../../components/Home/Blog-list";
import { blogList } from "../../config/data";
import { useState } from "react";

import EmptyList from "../../components/common/EmptyList";
const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchkey] = useState("");

  // Search SUMIT FUNCTION
  const handelSearchSubmit = (event) => {
    event.preventDefault();
    handelSearchResults();
  };

  // search for blog by category
  const handelSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };
  const handelClearSearch = () => {
    setBlogs(blogList);
    setSearchkey("");
  };
  return (
    <div>
      {/* Page header  */}
      <Header />
      {/* Search Bar  */}
      <SerchBar
        value={searchKey}
        clearSearch={handelClearSearch}
        formSubmit={handelSearchSubmit}
        handelSearchKey={(e) => setSearchkey(e.target.value)}
      />
      {/* Blog- list & Empty-list */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
