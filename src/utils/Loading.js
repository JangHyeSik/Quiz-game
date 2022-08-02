import { useState, useEffect } from "react";
import styled from "styled-components";
import { TailSpin } from "react-loader-spinner";
import { MAIN_COLOR_1 } from '../constants/styles';


const LOADING_INTERVAL_WAIT = 500;

export default function Loading() {
  const [loadingText, setLoadingText] = useState("문제 정보를 불러오는 중입니다.");

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      loadingText === "문제 정보를 불러오는 중입니다..."
        ? setLoadingText("문제 정보를 불러오는 중입니다.")
        : setLoadingText(loadingText + ".");
    }, LOADING_INTERVAL_WAIT);

    return () => {
      clearInterval(loadingInterval);
    }
  }, [loadingText]);

  return (
    <LoadingWrapper>
      {window.innerWidth <= 768 ? (
        <TailSpin color={MAIN_COLOR_1} width={80} height={80} />
      ) : (
        loadingText
      )}
    </LoadingWrapper>
  )
}

const LoadingWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
