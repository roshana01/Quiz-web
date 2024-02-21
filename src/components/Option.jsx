import React from "react";

export default function Option({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <>
      <div className="flex  mt-7">
        <div className="flex flex-col w-full  justify-center">
          {questions.options.map((item, index) => (
            <button
              disabled={hasAnswered}
              className={`bg-yellow-300 mb-2 py-4 px-36 rounded-full font-bold ${
                index === answer ? "answer" : ""
              } ${
                hasAnswered
                  ? index === questions.correctOption
                    ? "border-double border-4 border-green-400 "
                    : "border-double border-4 border-red-600 bg-yellow-200"
                  : ""
              }`}
              key={item}
              onClick={() => dispatch({ type: "newAnswer", payload: index })}
            >
              {item}🤖
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
