import React from "react";

export default function Loading() {
  return (
    <>
      {[1, 2, 3, 4].map((num) => (
        <div
          className="mt-10 bg-gray-300 w-[500px] h-[500px] animate-pulse"
          key={num}
        />
      ))}
    </>
  );
}
