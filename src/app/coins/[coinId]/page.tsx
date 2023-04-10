"use client";
import React, { useEffect, useState } from "react";
import { CoinInfo } from "./coinInfo";

function page({ params }: { params: { coinId: string } }) {
  const [coinData, setCoinData] = useState<CoinInfo>();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "http://localhost:3000/api/cg/coinInfo?" +
          new URLSearchParams({ id: params.coinId })
      );
      setCoinData(await res.json());
    };
    getData();
  }, []);

  return <div>{coinData?.product.description.en}</div>;
}

export default page;
