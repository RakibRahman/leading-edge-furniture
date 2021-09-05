import React, { useEffect } from "react";
import Carousel from "./Carousel";
import Header from "./Header";

function Home() {
  useEffect(() => {
    document.title = "LeadingEdge Furniture";
  }, []);
  return (
    <div className="flex flex-col-reverse items-center justify-between w-full p-4 lg:flex-row">
      <Header />
      <Carousel />
    </div>
  );
}

export default Home;
