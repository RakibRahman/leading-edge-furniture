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
        className=" product__card"
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
    <div className="text-white dark:text-black">
      <h1 className="py-4 my-2 text-6xl text-center capitalize">
        Some of our products
      </h1>

      <div className="card__wrapper">
        <Card product={productsData} />
      </div>
    </div>
  );
}

export default Products;
