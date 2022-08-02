import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import styled from "styled-components";
import { shuffle } from "lodash";
import Result from "../result/Result";
import Loading from "../../utils/Loading";
import { changeScore } from "../../features/result/resultSlice";
import { MAIN_COLOR_1, WHITE_COLOR, GRAY_COLOR } from "../../constants/styles";


export default function Quiz({ quizList, quizIndex, isCheck, setIsCheck, isLoading }) {
  const dispatch = useDispatch();

  const result = useSelector((state) => state.result);
  const quiz = quizList[quizIndex];

  const { isCompleted } = result;
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
            <Result />
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
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const SelectWrapper = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ isCheck, isCorrect }) => isCheck ? isCorrect ? MAIN_COLOR_1 : GRAY_COLOR : WHITE_COLOR};

  @media (max-width: 768px) {
    height: 5%;
  }
`;

const CheckBox = styled.input`
  zoom: 2;
`;

const SelectText = styled.span`
  font-size: 20px;
  margin-left: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
