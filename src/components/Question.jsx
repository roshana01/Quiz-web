import React from "react";
import Option from "./Option";

export default function Question({ questions, dispatch, answer }) {
  return (
    <>
      <h1 className="my-11 text-3xl font-bold text-center">
        {questions.question}🐧
      </h1>
      <div className="flex w-full h-[500px]  justify-center ">
        <div className="flex flex-col ">
          <Option questions={questions} dispatch={dispatch} answer={answer}/>
        </div>
      </div>
    </>
  );
}
