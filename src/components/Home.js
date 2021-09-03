import React from "react";
import Carousel from "./Carousel";
import Header from "./Header";

function Home() {
  return (
    <div className="flex flex-col-reverse items-center justify-between w-full p-4 lg:flex-row">
      <Header />
      <Carousel />
    </div>
  );
}

export default Home;
