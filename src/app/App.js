import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import QuizSession from "../components/QuizSession";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizSession />} />
    </Routes>
  );
}

export default App;
