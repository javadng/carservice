"use client";
import React from "react";
import ScrollPullAnimated from "./scrollPullAnimated";

interface Props {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const ServiceItem: React.FC<Props> = ({ title, desc, icon }) => {
  return (
    <ScrollPullAnimated
      offscreenY={300}
      onscreenY={50}
      className="item flex p-6 bg-light-gray rounded-md"
    >
      <div className="icon text-primary text-6xl mr-6">{icon}</div>
      <div className="text">
        <h1 className="font-bold my-3 text-xl">{title}</h1>
        <p className="text-secondary">{desc}</p>
        <button className="capitalize underline my-3">read more</button>
      </div>
    </ScrollPullAnimated>
  );
};

export default ServiceItem;
