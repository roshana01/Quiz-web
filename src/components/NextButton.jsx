import React from "react";

export default function NextButton({dispatch}) {
  return (
    <>
      <div className="flex justify-between flex-row-reverse mr-48 ">
        <button className="bg-yellow-400 w-32 py-3 rounded-full text-lg font-bold mb-16" onClick={()=>dispatch({type:"next"})}>
          next🐝
        </button>
      </div>
    </>
  );
}
