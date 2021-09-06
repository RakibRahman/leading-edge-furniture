import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header dark:text-black">
      <h1 className="title dark:text-black">
        Leading<span className="text-red-500 dark:text-green-800">Edge</span>{" "}
        Furn
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
          <button className="discover dark:bg-green-600 dark:text-white">
            Discover Now
          </button>
        </Link>
      </Tooltip>
    </div>
  );
};

export default Header;
