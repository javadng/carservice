import React from "react";

const Container = ({ Children }: { Children: React.ReactNode }) => {
  return <div className="container mx-auto w-5/6">{Children}</div>;
};

export default Container;
