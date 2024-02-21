import React from "react";

export default function StartScreen({ dispatch, lengthQuestion }) {
  return (
    <>
      <div className="title flex flex-col justify-center mt-14">
        <h1 className="text-[4em] font-bold text-center mt-8">
          ⭐🐝The React Quiz⭐🐝
        </h1>
        <div className="mt-32 flex flex-col ">
          <h2 className="text-center  font-bold  text-[26px]">
            Welcome to The React Quiz!😍
          </h2>
          <p className="text-center font-bold m-7 text-[18px]">
            <span>{lengthQuestion}</span> questions to test your React mastery
          </p>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-yellow-300 w-32 h-14 rounded-full mt-6 font-bold"
            onClick={() => dispatch({ type: "start" })}
          >
            Les't Start⚛️
          </button>
        </div>
      </div>
    </>
  );
}
