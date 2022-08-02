import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import QuizSession from "../components/quiz/QuizSession";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizSession />} />
    </Routes>
  );
}

export default App;
