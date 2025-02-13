import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({
  product,
  isFav,
  markFavrouite,
  unMarkFavrouite,
  addToCart,
}) => {
  return (
    <div key={product?.id} className="card relative p-6 text-center">
      <span className="absolute top-2 right-2">
        {isFav ? (
          <span
            onClick={() => {
              unMarkFavrouite(product?.id);
            }}
          >
            <FaHeart />
          </span>
        ) : (
          <span
            onClick={() => {
              markFavrouite(product?.id);
            }}
          >
            <CiHeart />
          </span>
        )}
      </span>
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="rounded object-contain w-[300px] h-[300px]"
        />
      </div>
      <h3 className="font-[600] text-start">{product.name}</h3>
      <h2 className="font-[900] text-start text-black-900">${product.price}</h2>
      <p>Available: {product.quantity}</p>

      <button
        type="button"
        className="mt-3 text-white bg-gradient-to-br from-green-400 to-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => addToCart(product?.id)}
        disabled={product.quantity === 0}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
