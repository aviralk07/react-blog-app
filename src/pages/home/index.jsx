import React from "react";
import Header from "../../components/Home/Header1";
import SerchBar from "../../components/Home/Search-Bar";
import BlogList from "../../components/Home/Blog-list";
import { blogList } from "../../config/data";

const Home = () => {
  return (
    <div>
      {/* Page header  */}
      <Header />
      {/* Search Bar  */}
      <SerchBar />
      {/* Blog- list & Empty-list */}
      <BlogList blogs={blogList} />
    </div>
  );
};

export default Home;
