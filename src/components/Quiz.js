import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import styled from "styled-components";
import { shuffle } from "lodash";
import Loading from "./Loading";
import { makeTimeText } from "../utils/utils";
import { changeScore } from "../features/result/resultSlice";

export default function Quiz({ quizList, quizIndex, isCheck, setIsCheck, isLoading }) {
  const dispatch = useDispatch();

  const result = useSelector((state) => state.result);
  const quiz = quizList[quizIndex];

  const { isCompleted, time, correctCount, inCorrectCount } = result;
  const { question, correct_answer, incorrect_answers } = quiz ? quiz : {};

  const selectList = useMemo(() => quiz && shuffle([correct_answer, ...incorrect_answers]), [quizList, quizIndex]);

  const handleChange = (e) => {
    const selectAnswer = e.target.value;
    const key = selectAnswer === correct_answer ? "correctCount" : "inCorrectCount";

    setIsCheck(true);
    dispatch(changeScore({ key }));
  };

  return (
    <QuizWrapper>
      {isLoading && <Loading />}
      {quiz &&
        <>
          {!isCompleted ? (
            <>
              <Question>{question}</Question>
              {selectList.map((select) => {
                return (
                  <SelectWrapper
                    key={select}
                    isCorrect={select === correct_answer}
                    isCheck={isCheck}
                  >
                    <CheckBox
                      type="checkbox"
                      value={select}
                      onChange={handleChange}
                      disabled={isCheck}
                    />
                    <SelectText>{select}</SelectText>
                  </SelectWrapper>
                );
              })}
            </>
          ) : (
            <>
              <h2>수고하셨습니다 !</h2>
              <div>소요 시간: {makeTimeText(time)}초</div>
              <div>총 개수: {quizList.length}개</div>
              <div>정답 개수: {correctCount}개</div>
              <div>오답 개수: {inCorrectCount}개</div>
            </>
          )}
        </>
      }
    </QuizWrapper>
  );
}

const QuizWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0px 50px;
`;

const Question = styled.h2`
`;

const SelectWrapper = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ isCheck, isCorrect }) => isCheck ? isCorrect ? "#33d9b2" : "#f1f2f6" : "#ffffff"};
`;

const CheckBox = styled.input`
  zoom: 2;
`;

const SelectText = styled.span`
  font-size: 20px;
  margin-left: 20px;
`;
