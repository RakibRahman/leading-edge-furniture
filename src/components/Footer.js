import React, { Fragment } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import MailIcon from "@material-ui/icons/Mail";
import { bestSelling, latestProducts } from "./../helpers/productsData";

function Footer() {
  const Card = ({ data }) => {
    return data.map((data) => (
      <div className="flex items-start gap-4 cursor-pointer" key={data.model}>
        <img className="object-cover w-sm h-sm" src={data.pic} alt="demo" />
        <p className="flex flex-col">
          <span>{data.model}</span>
          <span>৳{data.price}</span>
        </p>
      </div>
    ));
  };
  const About = () => (
    <div className="about-us md:w-xl">
      <h1 className="text-lg text-white">About Us</h1>
      <div className="w-4 h-2 my-4 bg-gray-400"></div>

      <p>
        Leading<span className="text-red-500">Edge</span> Furn
        <span className="text-red-500">i</span>ture is the largest furniture
        solution brand in Bangladesh. we are proudly providing quality products.
      </p>
      <div className="flex gap-2 my-2">
        <a
          href="https://oneummahbd.com/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon fontSize="large" />
        </a>
        <a
          href="https://twitter.com/?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon fontSize="large" />
        </a>
        <a
          href="https://mail.google.com/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailIcon fontSize="large" />
        </a>
        <a
          href="https://telegram.org/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
  const BestSelling = ({ title, products }) => (
    <div className="space-y-4 best-selling">
      <h1 className="text-lg text-white">{title}</h1>
      <div className="w-1/6 h-2 my-4 bg-gray-400"></div>
      <Card data={products} />
    </div>
  );
  const Newsletter = () => (
    <div className="w-6/6 email lg:w-xxl">
      <h1 className="text-lg text-white capitalize">Sign up for newsletter</h1>
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
        <button className="sign__btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
  return (
    <Fragment>
      <footer className="footer">
        <About />
        <BestSelling products={latestProducts} title="Latest" />
        <BestSelling products={bestSelling} title="Best Selling" />
        <Newsletter />
      </footer>
      <p className="copyright">Copyright 2021 © LeadingEdge Furniture </p>
    </Fragment>
  );
}

export default Footer;
