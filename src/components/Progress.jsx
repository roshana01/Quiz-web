import React from "react";

export default function Progress({
  index,
  points,
  answer,
  maxPoint,
  lengthQuestion,
}) {


  return (
    <>
      <div className="flex justify-center mt-20">
        <progress
          className="progress progress-warning w-[35%] h-3"
          value={index + +(answer !== null) }
          max={lengthQuestion}
        ></progress>
      </div>
      <div className="flex   justify-evenly p-5">
        <p>
          Question <span className="font-bold">{index + 1}</span> /
          {lengthQuestion}
        </p>
        <p>
          <span className="font-bold">{points}</span> / {maxPoint}
        </p>
      </div>
    </>
  );
}
