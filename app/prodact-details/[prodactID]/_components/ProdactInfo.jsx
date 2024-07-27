"use client";
import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import React, { useContext } from "react";
import SkilitonProdactInfo from "./SkilitonProdactInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import cartApi from "../../../_utils/cartApi";
import { CartContext } from "../../../_context/CartContext";
const ProdactInfo = ({ product }) => {
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const handelAddToCart = () => {
    if (user) {
      const data = {
        data: {
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          prodacts: [product?.id],
        },
      };

      cartApi
        .addToCart(data)
        .then((res) => {
          console.log("sucsees");
          setCart((prev) => {
            console.log(prev);
            return [
              ...prev,
              {
                id: res.data.data.id,
                product,
              },
            ];
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      router.push("/sign-in");
    }
  };
  return (
    <div>
      {product?.attributes?.title ? (
        <div>
          <h2 className="text-[20px]">{product?.attributes?.title}</h2>
          <h2 className=" text-[15px] text-gray-400">
            {product?.attributes?.Category}
          </h2>
          <h2 className=" text-[15px] mt-5">
            {product?.attributes?.description[0]?.children[0]?.text}
          </h2>
          <h2 className=" text-[11px] text-gray-500 flex gap-2 justify-start items-center mt-2">
            {product?.attributes?.InstantDelivery ? (
              <BadgeCheck className=" text-green-700 h-5 w-5" />
            ) : (
              <AlertOctagon />
            )}
            Eligible for instant delivery
          </h2>
          <h2 className="text-[23px]  mt-3 text-teal-800 font-bold">
            ${product?.attributes?.price}
          </h2>
          <button
            onClick={() => handelAddToCart()}
            className=" flex justify-center items-center gap-2  bg-teal-600 hover:bg-teal-700 rounded p-3 text-white mt-2"
          >
            <ShoppingCart />
            Add To Cart
          </button>
        </div>
      ) : (
        <SkilitonProdactInfo />
      )}
    </div>
  );
};

export default ProdactInfo;
