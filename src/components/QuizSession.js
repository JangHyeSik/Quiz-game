import { useState, useEffect } from "react";
import styled from "styled-components";
import Quiz from "./Quiz";
import Btn from "./Btn";
import { requestQuizList } from "../api/api";

export default function QuizSession() {
  const [quizList, setQuizList] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [result, setResult] = useState({
    isCompleted: false,
    correctCount: 0,
    inCorrectCount: 0,
  });

  const handleGoNext = () => {
    if (quizIndex === quizList.length - 1) {
      setResult({
        ...result,
        isCompleted: true,
      });

      return;
    }

    setQuizIndex(quizIndex + 1);
  };

  const fetchQuizData = async () => {
    const { results } = await requestQuizList();
    setQuizList(results);
  };

  useEffect(() => {
    fetchQuizData();
  }, []);

  return (
    <QuizSessionWrapper>
      <QuizContainer>
        <Quiz
          quizList={quizList}
          quizIndex={quizIndex}
          result={result}
          setResult={setResult}
        />
      </QuizContainer>
      <Btn handleGoNext={handleGoNext}>
        다음 문제
      </Btn>
    </QuizSessionWrapper>
  );
}

const QuizSessionWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuizContainer = styled.div`
  width: 85%;
  height: 80%;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 16%);
`;