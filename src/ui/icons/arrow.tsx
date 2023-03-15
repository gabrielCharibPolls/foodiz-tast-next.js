import React from "react";

interface ArrowProps {
  direction: "left" | "right";
}

const Arrow = ({ direction }: ArrowProps) => {
  const isLeft = direction === "right";
  const transformValue = isLeft ? "-180deg" : "180deg";
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ transform: `rotate(${transformValue})` }}
    >
      <path
        d={isLeft ? "M4.15103 9H13.8489" : "M13.8489 9H4.15103"}
        stroke='#393360'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d={
          isLeft
            ? "M8.99999 4.15106L4.15103 9.00002L8.99999 13.849"
            : "M8.99999 13.849L13.8489 9.00002L8.99999 4.15106"
        }
        stroke='#393360'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Arrow;
