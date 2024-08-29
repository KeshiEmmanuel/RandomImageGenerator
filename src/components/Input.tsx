import { useState } from "react";

export default function Input() {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your Name"
        className="w-[400px] px-2 py-3 rounded-md mx-auto bg-gray-300 my-10"
      />
    </>
  );
}
