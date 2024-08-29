import React from "react";

export default function Loading() {
  return (
    <>
      {[1, 2, 3, 4].map((num) => (
        <div className="mt-10 bg-gray-300 animate-pulse" key={num} />
      ))}
    </>
  );
}
