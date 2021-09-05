import React, { useEffect } from "react";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Demo from "./../assets/about.png";

function AboutUs() {
  useEffect(() => {
    document.title = "About Us";
    return () => {
      console.log("clear");
    };
  }, []);
  return (
    <div className="about__us">
      <div className="flex items-center justify-center gap-2">
        <div className="h-2 bg-gray-500 w-md "></div>
        <h1 className="space-x-2 text-4xl text-center">
          <DoubleArrowIcon fontSize="inherit" />
          <span> Our Story</span>
        </h1>
        <div className="h-2 bg-gray-500 rounded-md w-md"></div>
      </div>

      <div className="mt-4 space-y-4">
        <p>
          The Leading<span className="text-red-500">Edge</span> Furn
          <span className="text-red-500">i</span>ture is a business initiative
          and current our products are household furniture. We see business as a
          tool for social change. We assure quality material, unique design with
          a positive service.
        </p>
        <p>
          Our tagline is
          <span className="font-bold text-red-500"> Quality Matters</span> which
          outlines our motivation to spread quality products to society.
        </p>
        <p>
          The Leading<span className="text-red-500">Edge</span> Furn
          <span className="text-red-500">i</span>ture was established in June
          2000 by some fresh Leading university graduates aiming to create youth
          employment, promote positive values, and eliminating social stigma
          from society.
        </p>
        <p>
          <span className="text-red-500">RKB-1996</span> was our first product.
          We produced over 20000 models to spread the idea of ‘Mane valo dame
          kom’ (simple but gorgeous) and surprisingly we got a massive response
          from our valued customers.
        </p>

        <img
          src={Demo}
          alt="demo "
          className="object-cover mx-auto mb-4 rounded-lg w-xxl h-lg"
        />

        <p className="mt-lg">
          This inspired us to produce more furniture (65+ different designs) in
          the next slot. And this is how our journey as a furniture brand
          launched to spread positivity in society through:
        </p>
        <ul className="text-lg">
          <li>⭕ Unique Design</li>
          <li>⭕ Quality Material</li>
          <li>⭕ Your Lifestyle Partner</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
