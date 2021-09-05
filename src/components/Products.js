import React, { useEffect } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { productsData } from "./../helpers/productsData";

function Products() {
  useEffect(() => {
    document.title = "Products";
  }, []);

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
