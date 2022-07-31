import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "result",
  initialState: {
    isCompleted: false,
    correctCount: 0,
    inCorrectCount: 0,
    startTime: 0,
    time: 0,
  },
  reducers: {
    startQuiz: (state, { payload }) => {
      const { startTime } = payload;

      state.startTime = startTime;
    },
    changeScore: (state, { payload }) => {
      const { key } = payload;

      state[key] = state[key] += 1;
    },
    finishQuiz: (state, { payload }) => {
      const { time } = payload;

      state.isCompleted = true;
      state.time = time;
    },
  },
});

export const {startQuiz, changeScore, finishQuiz } = resultSlice.actions;

export default resultSlice.reducer;
