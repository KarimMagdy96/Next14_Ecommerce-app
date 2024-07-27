"use client";
import React, { useEffect, useState } from "react";
import ProdactLst from "./ProdactLst";
import ProdactApi from "../_utils/ProdactApi";

const ProdactSection = () => {
  const [prodactList, setProdactList] = useState([]);
  useEffect(() => {
    getLatsetProdact_();
  }, []);
  const getLatsetProdact_ = () => {
    ProdactApi.getLatestProdacts().then((res) => {
      setProdactList(res.data.data);
    });
  };
  return (
    <div className=" px-3 md:px-10 lg:px-20 ">
      <h2 className=" mt-11 text-xl font-bold text-slate-900">
        Our Latest Products
      </h2>
      <ProdactLst prodactList={prodactList} />
    </div>
  );
};

export default ProdactSection;
