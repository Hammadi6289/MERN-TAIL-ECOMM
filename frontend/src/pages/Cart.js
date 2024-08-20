import React, { useContext, useEffect, useState } from "react";
import SummaryApi from "../common";
import Context from "../context";
import displayPKRCurrency from "../helpers/displayCurrency";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const context = useContext(Context);
  const loadingCart = new Array(context.cartProductCount).fill(null);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.addToCartProductView.url, {
      method: SummaryApi.addToCartProductView.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
    setLoading(false);
    const responseData = await response.json();
    if (responseData.success) {
      setData(responseData.data);
    }
  };
  const decraseQty = async (id, qty) => {
    if (qty >= 1) {
      const response = await fetch(SummaryApi.updateCartCount.url, {
        method: SummaryApi.updateCartCount.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          quantity: qty - 1,
        }),
      });
      //updateCartCount controller
      const responseData = await response.json();
      if (responseData.success) {
        fetchData();
      }
    }
  };
  const increaseQty = async (id, qty) => {
    const response = await fetch(SummaryApi.updateCartCount.url, {
      method: SummaryApi.updateCartCount.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        quantity: qty + 1,
      }),
    });
    //updateCartCount controller
    const responseData = await response.json();
    if (responseData.success) {
      fetchData();
    }
  };
  const deleteCartProduct = async (id) => {
    //deleteCartCount controller
    const response = await fetch(SummaryApi.deleteCartCount.url, {
      method: SummaryApi.deleteCartCount.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    });
    //updateCartCount controller
    const responseData = await response.json();
    if (responseData.success) {
      fetchData();
      context.fetchUserAddToCart();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="text-center tect-lg my-3">
        {data.length === 0 && !loading && (
          <p className="bg-white py-5">No Data Available</p>
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:justify-between p-4">
        {/* view product in Cart*/}
        <div className="w-full max-w-3xl">
          {loading
            ? loadingCart.map((el) => {
                return (
                  <div
                    key={el + "Add to Cart Loading"}
                    className="w-full bg-slate-200 h-32 my-3 border-slate-300 animate-pulse rounded"
                  ></div>
                );
              })
            : data.map((product, index) => {
                return (
                  <div
                    key={product?._id + "Add to Cart Loading"}
                    className="w-full bg-white h-32 my-2 border border-slate-300  rounded grid grid-cols-[128px,1fr]"
                  >
                    <div className="w-32 h-32 bg-slate-200">
                      <img
                        src={product?.productId?.productImage[0]}
                        className="w-full h-full object-scale-down mix-blend-multiply"
                      />
                    </div>
                    <div className="px-4 py-2 relative">
                      {/*** Delete product from the Cart*/}
                      <div
                        className="absolute right-0 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer"
                        onClick={() => deleteCartProduct(product?._id)}
                      >
                        <RiDeleteBin6Line />
                      </div>
                      <h2 className="text-lg lg:text xl text-ellipsis line-clamp-1">
                        {product?.productId?.productName}
                      </h2>
                      <p className="capitalize text-slate-500">
                        {product?.productId?.category}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-red-600 font-medium text-lg">
                          {displayPKRCurrency(product?.productId?.sellingPrice)}
                        </p>
                        <p className="text-slate-600 font-semibold text-lg">
                          {displayPKRCurrency(
                            product?.productId?.sellingPrice * product?.quantity
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <button
                          className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded "
                          onClick={() =>
                            decraseQty(product?._id, product?.quantity)
                          }
                        >
                          -
                        </button>
                        <span>{product?.quantity}</span>
                        <button
                          className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded "
                          onClick={() =>
                            increaseQty(product?._id, product?.quantity)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
        {/****  SubTotal  ****/}
        <div className="mt-5 lg:mt-0 w-full max-w-sm">
          {loading ? (
            <div className="h-36 bg-slate-200 border border-slate-300 animate-pulse"></div>
          ) : (
            <div className="h-36 bg-slate-200">SubTotal</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
