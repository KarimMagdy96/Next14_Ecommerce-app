import React from "react";
import { ProdactItem } from "./ProdactItem";
import Image from "next/image";
import { List } from "lucide-react";
import Link from "next/link";
const ProdactLst = ({ prodactList }) => {
  console.log(prodactList);
  return (
    <div className="  grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  w-fit m-auto">
      {prodactList.map((i) => (
        <Link
          href={`/prodact-details/${i?.id}`}
          className=" mt-6 border rounded-lg hover:shadow-lg hover:border-teal-400 hover:cursor-pointer"
        >
          <Image
            src={i?.attributes?.img?.data?.attributes?.url}
            width={350}
            height={350}
            alt=""
            n
            className=" h-[16rem] md:h-[23rem]   rounded-t-lg "
          />

          <div className="p-3 bg-gray-100 rounded-b-lg flex justify-between items-center">
            <div className="  ">
              <h2 className=" text-[14px] font-medium line-clamp-1">
                {i?.attributes?.title}
              </h2>
              <h2 className=" text-gray-400 text-[12px] flex items-center gap-2  ">
                <List className=" w-4 h-4" /> {i?.attributes?.Category}
              </h2>
            </div>
            <h2 className=" text-[15px]">{i.attributes.price}$</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProdactLst;
