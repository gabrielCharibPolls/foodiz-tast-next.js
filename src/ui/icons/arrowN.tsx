import React from "react";
interface LeftArrowProps {
  left: boolean;
}
///////////////////////////////////////////////
///si left est vrai
//////////////////////////////////////////////

const LeftArrow = ({ left }: LeftArrowProps) => {
  const arrowDirection = left ? "left" : "right";
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        transform: `rotate(${arrowDirection === "left" ? "-180deg" : "0"})`,
      }}
    >
      <path
        d='M13.8489 9H4.15103'
        stroke='#393360'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.99999 13.849L4.15103 9.00002L8.99999 4.15106'
        stroke='#393360'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default LeftArrow;
