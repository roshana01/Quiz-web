import React from "react";

export default function Quiestion() {
  return (
    <>
      <div className="flex w-full h-[500px]  justify-center">
        <div className="flex flex-col ">
          <div className="flex justify-center mt-20">
            <progress
              className="progress progress-error w-3/6 "
              value={40}
              max="100"
            ></progress>
          </div>
          <div className="flex   justify-evenly p-5">
            <p>
              Question <span className="font-bold">1/15</span>
            </p>
            <p>
              <span className="font-bold">0/280</span> points
            </p>
          </div>

          <h1 className="my-14 text-3xl font-bold text-center">
            what is it fremwork javascript ?🐧
          </h1>
          <div className="flex justify-center mt-14">
            <div className="flex flex-col w-50 mr-36">
              <button className="bg-sky-300 m-8 py-4 px-36 rounded-full font-bold">
                react js👽
              </button>
              <button className="bg-pink-300 m-8 py-4 px-36 rounded-full font-bold">
                vue js eact js 👽
              </button>
            </div>
            <div className="flex flex-col w-50 ">
              <button className="bg-lime-300 m-8 py-4 px-36 rounded-full font-bold">
                anglar js 👽
              </button>
              <button className="bg-purple-300 m-8 py-4 px-36 rounded-full font-bold">
                payton👽
              </button>
            </div>
          </div>
          <div className="flex justify-center ">
            <button className="bg-yellow-400 w-60 py-3 rounded-full text-lg font-bold mt-14">
              next🐝
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
