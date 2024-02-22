import React from "react";

export default function NextButton({
  dispatch,
  answer,
  lengthQuestion,
  index,
}) {
  if (answer === null) return null;

  if (index < lengthQuestion - 1) {
    return (
      <>
        <div className="flex justify-between flex-row-reverse mr-48 ">
          <button
            className="bg-yellow-400 w-32 py-3 rounded-full text-lg font-bold mb-16"
            onClick={() => dispatch({ type: "next" })}
          >
            next🐝
          </button>
        </div>
      </>
    );
  }
  if (index === lengthQuestion - 1) {
    return (
      <div className="flex flex-row-reverse">
        <button
          onClick={() => dispatch({ type: "finishPage" })}
          className="bg-yellow-400 w-36 py-2 rounded-full text-lg  mb-12 mr-48  font-bold    mt-24"
        >
          Finish🐝
        </button>
      </div>
    );
  }
}
