import React, { useEffect, useState } from "react";

import S1 from "./../assets/slides/s1.jpg";
import S2 from "./../assets/slides/s2.jpg";
import S3 from "./../assets/slides/s3.jpg";

function Carousel() {
  const images = [S1, S2, S3];

  let time = 3000;
  let init = 0;
  const [count, setCount] = useState(init);
  useEffect(() => {
    const slideImage = setInterval(() => {
      count < images.length - 1 ? setCount(count + 1) : setCount(init);
      console.log(count);
    }, time);
    return () => {
      clearInterval(slideImage);
    };
  }, [count]);

  return (
    <div className="w-screen border-2 border-red-200 h-96 slider">
      <img className="slideImage" src={images[count]} alt="slide images" />
    </div>
  );
}

export default Carousel;
