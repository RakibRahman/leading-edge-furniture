import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-ui/core";

const Header = () => {
  return (
    <div className="flex-1 p-2 mt-2 space-y-2 text-white lg:space-y-4 header">
      <h1 className="text-4xl font-black tracking-wide animate-pulse lg:text-6xl">
        Leading<span className="text-red-500">Edge</span> Furn
        <span className="text-red-500">i</span>ture
      </h1>
      <p className="mt-2 font-bold tracking-wide capitalize lg:text-2xl">
        Modern high quality and comfortable
      </p>
      <p className="text-sm font-bold tracking-wider capitalize lg:text-xl">
        available on our <span className="text-red-500">stores</span>
      </p>
      <Tooltip title="Products Details" enterDelay={1000}>
        <Link to="/products">
          <button className="discover">Discover Now</button>
        </Link>
      </Tooltip>
    </div>
  );
};

export default Header;
