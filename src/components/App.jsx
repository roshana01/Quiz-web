import React from "react";
import Loading from "./Loading";
import StartScreen from "./StartScreen";
import Quiestion from "./Quiestion";
import Error from "./Error";

export default function App() {
  return (
    <>
      <div className="contanier w-[100%] h-[100vh] bg-yellow-50  flex flex-col">
        {/* <Loading /> */}
        {/* <StartScreen /> */}
        {/* <Quiestion/> */}
        <Error />
      </div>
    </>
  );
}
