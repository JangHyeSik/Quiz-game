import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Quiz from "./Quiz";
import Btn from "./Btn";
import { finishQuiz, resetQuiz } from "../features/result/resultSlice";
import { requestQuizList } from "../api/api";
import { WHITE_COLOR } from "../constants/styles";

export default function QuizSession() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const result = useSelector((state) => state.result);

  const [quizList, setQuizList] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [isCheck, setIsCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { isCompleted, startTime } = result;

  const handleGoNext = () => {
    if (quizIndex === quizList.length - 1) {
      const endTime = Date.now();
      const time = endTime - startTime;

      setIsCheck(false);
      dispatch(finishQuiz({ time }));
      return;
    }

    setQuizIndex(quizIndex + 1);
    setIsCheck(false);
  };

  const retryQuiz = (e) => {
    const { value } = e.target;

    if (value === "home") {
      const startTime = 0;

      navigate("/");
      dispatch(resetQuiz({ startTime }));

      return;
    }

    if (value === "retry") {
      const startTime = Date.now();

      dispatch(resetQuiz({ startTime }));
      setQuizIndex(0);
    }
  };

  const fetchQuizData = async () => {
    const { results } = await requestQuizList();

    setQuizList(results);
    setIsLoading(false);
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
          isCheck={isCheck}
          setIsCheck={setIsCheck}
          isLoading={isLoading}
        />
      </QuizContainer>
      {isCheck && <Btn handleGoNext={handleGoNext}>다음 문제</Btn>}
      {isCompleted &&
        <BtnContainer>
          <Btn handleGoNext={retryQuiz} value={"home"}>홈으로</Btn>
          <Btn handleGoNext={retryQuiz} value={"retry"}>다시 풀기</Btn>
        </BtnContainer>
      }
    </QuizSessionWrapper>
  );
}

const QuizSessionWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const QuizContainer = styled.div`
  width: 65%;
  height: 80%;
  border-radius: 10px;
  background-color: ${WHITE_COLOR};
  box-shadow: 0px 4px 10px rgb(0 0 0 / 16%);
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
