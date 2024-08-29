import React from "react";

export default function Loading() {
  return (
    <>
      {[1, 2, 3, 4].map((num) => (
        <div
          className="w-[280px] mt-10 h-[423px] bg-gray-300 animate-pulse"
          key={num}
        />
      ))}
    </>
  );
}
