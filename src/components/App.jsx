import React, { useEffect, useReducer } from "react";
import Loading from "./Loading";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Error from "./Error";
import Progress from "./Progress";
import NextButton from "./NextButton";
import Finish from "./Finish";

const initialState = {
  questions: [],
  //
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  hightScore: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "getData":
      return { ...state, questions: action.payload, status: "ready" };
    // field
    case "errorField":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        //in ghesmato copy karadm
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "next":
      return { ...state, index: state.index + 1, answer: null };
    case "finishPage":
      return {
        ...state,
        status: "finish",
        hightScore:
          state.points > state.hightScore ? state.points : state.hightScore, //copy
      };

    case "reStart":
      return {
        ...initialState,
        status: "ready",
        questions: state.questions,
      };
    default:
      break;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, answer, points, hightScore } = state;
  const lengthQuestion = questions.length;
  const maxPoint = questions.reduce((acc, cur) => acc + cur.points, 0);
  // console.log(maxPoint);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();

        dispatch({ type: "getData", payload: data });
      } catch (error) {
        dispatch({ type: "errorField" });
      }
    })();
  }, []);

  return (
    <>
      <div className="container w-[100%] h-[100vh] bg-yellow-50  flex flex-col">
        {status === "loading" ? (
          <Loading />
        ) : status === "error" ? (
          <Error />
        ) : status === "ready" ? (
          <StartScreen dispatch={dispatch} lengthQuestion={lengthQuestion} />
        ) : status === "active" ? (
          <>
            <Progress
              index={index}
              points={points}
              answer={answer}
              maxPoint={maxPoint}
              lengthQuestion={lengthQuestion}
            />
            <Question
              questions={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              lengthQuestion={lengthQuestion}
              index={index}
            />
          </>
        ) : status === "finish" ? (
          <Finish
            dispatch={dispatch}
            maxPoint={maxPoint}
            score={hightScore}
            points={points}
          />
        ) : (
          ""
        )}
        {/* <Loading /> */}
        {/* <StartScreen /> */}
        {/* <Question/> */}
        {/* <Error /> */}
      </div>
    </>
  );
}
