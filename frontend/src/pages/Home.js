import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />
      <HorizontalCardProduct
        category={"airpods"}
        heading={"Top Picks Airpods"}
      />
      <HorizontalCardProduct category={"mobiles"} heading={"Mobile Phones"} />
      <VerticalCardProduct category={"earphones"} heading={"Earphones"} />
      <VerticalCardProduct
        category={"camera"}
        heading={"Camera & accessories"}
      />

      <VerticalCardProduct category={"printers"} heading={"Printers"} />
      <VerticalCardProduct category={"processor"} heading={"Processor"} />
      <VerticalCardProduct category={"televisions"} heading={"TVs"} />
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"} />
      <VerticalCardProduct category={"speakers"} heading={"BT Speakers"} />

      <VerticalCardProduct category={"mouse"} heading={"Mouse"} />
    </div>
  );
};

export default Home;
