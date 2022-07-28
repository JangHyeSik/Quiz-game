import { useState, useMemo } from "react";
import styled from "styled-components";
import { shuffle } from "lodash";


export default function Quiz({ quizList, quizIndex, result, setResult }) {
  const [isCheck, setIsCheck] = useState(false);

  const quiz = quizList[quizIndex];
  const { question, correct_answer, incorrect_answers } = quiz ? quiz : {};
  const { isCompleted, correctCount, inCorrectCount } = result;

  const selectList = useMemo(() => quiz && shuffle([correct_answer, ...incorrect_answers]), [quizList, quizIndex]);

  const handleChange = (e) => {
    const selectAnswer = e.target.value;
    const key = selectAnswer === correct_answer ? "correctCount" : "inCorrectCount";
    const isCorrect = selectAnswer === correct_answer;

    setResult({
      ...result,
      [key]: isCorrect ? correctCount + 1 : inCorrectCount + 1,
    });

    setIsCheck(true);
  };

  return (
    <>
      {(!isCompleted && quiz) &&
        <>
          <Question>{question}</Question>
          {selectList.map((select) => {
            return (
              <div key={select}>
                <CheckBox type="checkbox" value={select} onChange={handleChange}/>
                {select}
              </div>
            );
          })}
        </>
      }
    </>
  );
}

const Question = styled.div`
  font-size: 20px;
`;

const CheckBox = styled.input`
`;
