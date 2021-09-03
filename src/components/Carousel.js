import React, { useEffect, useState } from "react";

import S1 from "./../assets/slides/s1.jpg";
import S2 from "./../assets/slides/s2.jpg";
import S3 from "./../assets/slides/s3.jpg";

function Carousel() {
  const images = [S1, S2, S3];

  let time = 6000;

  const [count, setCount] = useState(0);
  useEffect(() => {
    const slideImage = setInterval(() => {
      count < images.length - 1 ? setCount(count + 1) : setCount(0);
    }, time);
    return () => {
      clearInterval(slideImage);
    };
  }, [count, time, images.length]);

  return (
    <div className="w-full overflow-hidden rounded-lg h-xl lg:h-extra md:w-xxxl carousel">
      <img
        className="object-cover h-full transition ease-in-out "
        src={images[count]}
        alt="slide images"
      />
    </div>
  );
}

export default Carousel;
