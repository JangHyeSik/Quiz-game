import axios from "axios";

export const requestQuizList = async () => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_API_URL);

    return data;
  } catch(err) {
    console.err(err);
  }
};
