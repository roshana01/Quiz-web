import React from "react";

export default function Loading() {
  return (
    <>
      <h1 className="loading-title text-center mt-16 text-gray-700 font-bold">
        please wait for the question page to load...⌛
      </h1>
      <div className="flex justify-center items-center h-[600px] ">
        <div className="loading loading-dots w-40 h-40 bg-yellow-400"></div>
      </div>
    </>
  );
}
