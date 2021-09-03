import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import P1 from "./../assets/products/A-160.webp";
import P2 from "./../assets/products/B-177.webp";
import P3 from "./../assets/products/SS-287.webp";
import P4 from "./../assets/products/B-175.webp";
import P5 from "./../assets/products/BC-123.webp";
import P6 from "./../assets/products/D-551.webp";
import P7 from "./../assets/products/SB-110.webp";
import P8 from "./../assets/products/SS-295.webp";
import P9 from "./../assets/products/BFL-750.webp";
function Products() {
  const productsData = [
    {
      model: "SKU: A-160",
      price: "25300",
      pic: P1,
    },
    {
      model: "SKU: B-175",
      price: "5300",
      pic: P2,
    },
    {
      model: "SKU: SS-287",
      price: "39000",
      pic: P3,
    },
    {
      model: "SKU: SB-110",
      price: "9000",
      pic: P4,
    },
    {
      model: "SKU: B-177",
      price: "25300",
      pic: P5,
    },
    {
      model: "SKU: BFL-750",
      price: "42300",
      pic: P6,
    },
    {
      model: "SKU: SS-295",
      price: "21300",
      pic: P7,
    },
    {
      model: "SKU: BC-123",
      price: "16900",
      pic: P8,
    },
    {
      model: "SKU: D-551",
      price: "9300",
      pic: P9,
    },
  ];

  const Card = ({ product }) => {
    return product.map((product) => (
      <div
        className="px-2 bg-center bg-cover rounded-md product__card group w-lg h-lg lg:w-xl"
        style={{ backgroundImage: `url(${product.pic})` }}
        key={product.model}
      >
        <div className="p-2 text-lg text-black">
          <p className="font-bold text-gray-600">{product.model}</p>
          <p>৳{product.price}</p>
        </div>
        <div id="triangle-bottom-right"></div>

        <button className="cart__btn">
          <AddShoppingCartIcon color="primary" fontSize="large" />
        </button>
      </div>
    ));
  };
  return (
    <div className="text-white">
      <h1 className="py-4 my-2 text-6xl text-center">Some of our products</h1>

      <div className="grid grid-cols-1 gap-2 my-4 overflow-hidden lg:gap-4 justify-items-center card__wrapper md:grid-cols-2 lg:grid-cols-3">
        <Card product={productsData} />
      </div>
    </div>
  );
}

export default Products;
