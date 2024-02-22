import React from "react";

export default function Finish({ dispatch, maxPoint, score, points }) {
  // console.log(maxPoint);
  // console.log(points);
  const percentage = (points / maxPoint) * 100;
  let emoji;
  if (percentage === 100) emoji = " 🏆";
  if (percentage >= 80 && percentage < 100) emoji = "🥇";
  if (percentage >= 50 && percentage < 80) emoji = "🥈";
  if (percentage >= 0 && percentage < 50) emoji = "🥉";
  if (percentage === 0) emoji = "🥴";

  return (
    <>
      <div className="mt-2">
        <div className="title flex-col flex  items-center mt-14 w-full h-full relative">
          <h1 className="text-[4em] font-bold  mt-8">⭐🐝The React Quiz⭐🐝</h1>
          <div className="bg-yellow-300 mt-28 py-3 px-24 rounded-full">
            <h2 className="text-center text-xl font-bold">
              you scored <strong>{points}</strong>out of {maxPoint} (
              {Math.ceil(percentage)}%)🐝
            </h2>
          </div>
          <h3 className="mt-16 text-lg">
            {emoji}...(HighScore: {score} points)...{emoji}
          </h3>
          <h1 className="text-[7em] mt-10"> {emoji}</h1>
        </div>

        <button
          onClick={() => dispatch({ type: "reStart" })}
          className="bg-yellow-400 w-36 py-2 rounded-full text-lg  mb-20 absolute right-64 "
        >
          ReStart Quiz
        </button>
      </div>
    </>
  );
}

//🥴😵‍💫🙀🧐🥳😜
