import React, { Fragment } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import MailIcon from "@material-ui/icons/Mail";
import P1 from "./../assets/products/A-160.webp";
import P2 from "./../assets/products/B-177.webp";
import P3 from "./../assets/products/SS-287.webp";

function Footer() {
  const data = [
    {
      pic: P1,
      model: "SKU:A-160",
      price: "22,500",
    },
    {
      pic: P2,
      model: "SKU:B-177",
      price: "12,900",
    },
    {
      pic: P3,
      model: "SKU:SS-287",
      price: "2,500",
    },
  ];

  const Card = ({ data }) => {
    return data.map((data) => (
      <div className="flex items-start gap-4" key={data.model}>
        <img className="object-cover w-sm h-sm" src={data.pic} alt="demo" />
        <p className="flex flex-col">
          <span>{data.model}</span>
          <span>৳{data.price}</span>
        </p>
      </div>
    ));
  };

  return (
    <Fragment>
      <footer className="flex-col items-start justify-between p-4 space-y-4 text-lg text-white bg-gray-600 md:flex lg:flex-row ">
        <div className="about-us md:w-xl">
          <h1 className="text-lg text-white">About Us</h1>
          <div className="w-4 h-2 my-4 bg-gray-400"></div>

          <p>
            Leading<span className="text-red-500">Edge</span> Furn
            <span className="text-red-500">i</span>ture is the largest furniture
            solution brand in Bangladesh. we are proudly providing quality
            products.
          </p>
          <div className="flex gap-2 my-2">
            <a
              href="https://oneummahbd.com/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://twitter.com/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://mail.google.com/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailIcon />
            </a>
            <a
              href="https://telegram.org/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
            </a>
          </div>
        </div>
        <div className="space-y-4 best-selling">
          <h1 className="text-lg text-white">Best Selling</h1>
          <div className="w-1/6 h-2 my-4 bg-gray-400"></div>
          <Card data={data} />
        </div>

        <div className="w-6/6 email lg:w-xxl">
          <h1 className="text-lg text-white capitalize">
            Sign up for newsletter
          </h1>
          <div className="h-2 my-4 bg-gray-400 w-sm"></div>
          <p>
            Get all the latest information on events, sales, and offers. <br />
            Sign up for the newsletter:
          </p>
          <form className="flex flex-col my-2 md:w-lg">
            <label htmlFor="email" className="font-bold tracking-wide">
              Email Address:
            </label>
            <input
              placeholder="Your Email Address"
              className="p-2 mt-2 rounded-md sm:w-xl"
              type="email"
              name="email"
              id="email"
            />
            <button
              className="p-2 mt-4 text-white bg-red-500 rounded-md w-sm hover:bg-red-400"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </footer>
      <p className="w-full py-2 text-lg text-center text-gray-300 bg-gray-900 lg:text-xl">
        Copyright 2021 © LeadingEdge Furniture{" "}
      </p>
    </Fragment>
  );
}

export default Footer;
