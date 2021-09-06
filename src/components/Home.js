import React, { useEffect } from "react";
import Carousel from "./Carousel";
import Header from "./Header";

function Home() {
  useEffect(() => {
    document.title = "LeadingEdge Furniture";
  }, []);
  return (
    <div className="home">
      <Header />
      <Carousel />
    </div>
  );
}

export default Home;
