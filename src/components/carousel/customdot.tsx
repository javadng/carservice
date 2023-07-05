import React from "react";

interface CustomDotProps {
  onClick: () => void;
  onMove: boolean;
  index: number;
  active: boolean;
  carouselState: {
    currentSlide: number;
    deviceType: string;
  };
}

const CustomDot: React.FC<CustomDotProps> = ({
  onClick,
  onMove,
  index,
  active,
  carouselState: { currentSlide, deviceType },
}) => {
  const carouselItems = ["1", "2", "3"];

  return (
    <button
      className={active ? "active" : "inactive"}
      onClick={() => onClick()}
    >
      {React.Children.toArray(carouselItems)[index]}
    </button>
  );
};

export default CustomDot;
