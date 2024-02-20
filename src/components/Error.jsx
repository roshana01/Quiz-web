import React from "react";

export default function Error() {
  return (
    <>
      <div>
        <div className="w-full flex justify-center items-center">
          <img
            src="./public/image/404.jpg"
            alt="404"
            className="w-96 h-96 rounded-full mt-16 shadow-lg"
          />
        </div>
        <h1 className="text-center mt-20 text-[2em]  font-thin">
          ❌There was an error fecthing questions.
        </h1>
      </div>
    </>
  );
}
