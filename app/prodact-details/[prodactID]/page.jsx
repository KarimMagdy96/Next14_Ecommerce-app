"use client";

import ProdactApi from "../../_utils/ProdactApi";
import React, { useEffect, useState } from "react";
import ProdactBanner from "./_components/ProdactBanner";
import ProdactInfo from "./_components/ProdactInfo";
import { usePathname } from "next/navigation";
import ProdactLst from "../../_conponents/ProdactLst";
import BreadCrumb from "../../_conponents/BreadCrumb";

function ProductDetails({ params }) {
  const path = usePathname();
  const [productDetails, setProductDetails] = useState({});
  const [similarProductList, setSimilarProductList] = useState({});
  useEffect(() => {
    getProductDetails();
  }, [params?.prodactID]);

  const getProductDetails = () => {
    ProdactApi.getProductDetails(params?.prodactID).then((res) => {
      console.log(res.data.data);
      setProductDetails(res.data.data);
      getProductByCategory(res.data.data);
    });
  };
  const getProductByCategory = (product) => {
    ProdactApi.getProductByCategory(product?.attributes?.Category).then(
      (res) => {
        console.log(res.data.data);
        setSimilarProductList(res.data.data);
      }
    );
  };
  return (
    <div className="px-10 py-8 md:px-28 ">
      <BreadCrumb path={path} />
      <div className=" mt-10 gap-14 grid grid-cols-1 md:grid-cols-2 lg:gap-0 ">
        <ProdactBanner product={productDetails} />
        <ProdactInfo product={productDetails} />
      </div>
      <h2 className=" mt-24 text-xl mb-4  text-slate-900">Similar Products</h2>
      {similarProductList.length > 0 && (
        <ProdactLst prodactList={similarProductList} />
      )}
    </div>
  );
}

export default ProductDetails;
