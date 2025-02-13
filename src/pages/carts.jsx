import { useState } from "react";

export default function Cart({ cartItems, products, addToCart, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    return sum + product.price * item.quantity;
  }, 0);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg my-[120px]">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => {
              const product = products.find((p) => p.id === item.productId);
              return (
                <div key={item.productId} className="flex justify-between items-center p-4 border rounded-md">
                  <div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded"
                        onClick={() => removeFromCart(item.productId, false)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded"
                        onClick={() => addToCart(item.productId)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">${(product.price * item.quantity).toFixed(2)}</p>
                    <button
                      className="mt-2 text-red-500 hover:underline"
                      onClick={() => removeFromCart(item.productId, true)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 border-t pt-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total:</h2>
            <h2 className="text-xl font-bold">${total.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
}
