import React from "react";
import Bloglist from "../Bloglist";
import useFetch from "../useFetch";
import "./home.css";

const Home = () => {
    const {data:blog,isPending,error} = useFetch("http://localhost:8000/blog")


 

  return (
    <div id="Home" className="Home">
      <div className="container">
          {error && <div>{error}</div>}
          {isPending && <div>{isPending}</div>}
        {blog && <Bloglist blog={blog}/>}
      </div>
    </div>
  );
};

export default Home;
