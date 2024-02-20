import React, { useEffect, useReducer } from "react";
import Loading from "./Loading";
import StartScreen from "./StartScreen";
import Quiestion from "./Quiestion";
import Error from "./Error";

const initialState = {
  quiestions: [],
  //
  status: "loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "getData":
      return { ...state, quiestions: action.payload, status: "ready" };

    case "erorrFild":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    default:
      break;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { quiestions, status } = state;
  const lengthQusetin = quiestions.length;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();

        dispatch({ type: "getData", payload: data });
      } catch (error) {
        dispatch({ type: "erorrFild" });
      }
    })();
  }, []);

 
  return (
    <>
      <div className="contanier w-[100%] h-[100vh] bg-yellow-50  flex flex-col">
        {status === "loading" ? (
          <Loading />
        ) : status === "error" ? (
          <Error />
        ) : status === "ready" ? (
          <StartScreen
            dispatch={dispatch}
            lengthQusetin={lengthQusetin}
          />
        ) : status === "active" ? (
          <Quiestion />
        ) : (
          ""
        )}
        {/* <Loading /> */}
        {/* <StartScreen /> */}
        {/* <Quiestion/> */}
        {/* <Error /> */}
      </div>
    </>
  );
}
