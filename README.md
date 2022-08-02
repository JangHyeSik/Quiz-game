# 📖 Quiz game

## 목록
- 🌏 배포
- 📀 실행방법
- ✅ 기능
- 🖥 기술스택
- 🤔 기술스택 선정 이유
- 😂 아쉬운 점
- 기타

## 🌏 배포
### [📖 Quiz game 배포 사이트](https://inspiring-liger-6f1011.netlify.app)

## 📀 실행방법

실행에 필요한 모듈을 설치해주세요.

```sh
npm install
```

.env 파일을 생성하고 환경 변수를 입력해주세요.

```sh
REACT_APP_API_URL = https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple
```

위 단계를 완료하고 아래 명령어를 입력하면 로컬 환경에서 구동하실 수 있습니다.

```sh
npm start
```

## ✅ 기능
- 사용자는 '퀴즈 풀기' 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다. ✅
- 사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다. ✅
- 사용자는 답안을 선택하면 다음 문항을 볼 수 있다. ✅
- 답안 선택 후 다음 문항 버튼을 볼 수 있다. ✅
- 답안이 맞았는지 틀렸는지 바로 알 수 있다. ✅
- 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다. ✅
- 모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다. ✅
  - 퀴즈를 마칠 때까지 소요된 시간 ✅
  - 정답 개수 ✅
  - 오답 수 ✅
- 정 오답에 대한 비율을 차트로 표기 ✅
- 다시 풀기 ✅
- 반응형 ✅
- 테스트 ❌
- 오답 노트 ❌

## 🖥 기술스택

### Frontend

- React(Create-react-app)
- React-router-dom
- Redux
- Redux-Toolkit
- Styled-components

## 🤔 기술스택 선정 이유

### Redux && Redux-Toolkit
<img src="https://user-images.githubusercontent.com/85345068/182289929-fb15a018-10fb-4daa-a5da-9488fa9f1e08.png" alt="데이터 흐름" />
<div>Redux && Redux-Toolkit를 사용한 이유는 위와 같은 데이터 흐름 때문입니다.</div>
<div>Redux && Redux-Toolkit를 사용하지 않고 작업을 했을 때 왼쪽 그림과 같은 데이터 흐름이 발생하였습니다.</div>
<div>왼쪽과 같은 데이터 흐름이었을 때 Prop drilling이 심해져 상태를 관리할 때 직관적이지 못하고 상태 추적이 어려웠습니다.</div>
<div>이를 보완하기 위해 Redux && Redux-Toolkit을 사용하여 전역 스토어에 결과 데이터를 저장하고 상태를 공유하였습니다.</div>
<div>그 결과 직관적으로 상태를 관리, 추적할 수 있었습니다!</div>

### Styled-components
<div>Styled-components를 사용하면 컴포넌트 파일 내부에서 CSS를 작성할 수 있기 때문에</div>
<div>CSS 파일을 분산하여 작성하는 것에 비해 생산성이 더 좋을 것이라고 생각했습니다.</div>

## 😂 아쉬운 점
<div>컴포넌트 테스트, 오답노트, 결과 기록 기능을 시간상 구현하지 못한 점이 많이 아쉽습니다.</div>
<div>특히 컴포넌트 단위, 통합 테스트를 알아보고 적용시켜본다면 정말 좋은 경험이 될 거 같습니다. 감사합니다.</div>

## 기타
<div>이번 기회를 통해서 정말 많은 것을 알아가고 또 배웠습니다.</div>
<div>다시 한번 좋은 기회 주셔서 감사드립니다!!</div>
