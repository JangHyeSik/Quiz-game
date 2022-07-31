export const makeTimeText = (time) => {
  const hour = String(Math.floor((time / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const minute = String(Math.floor((time / (1000 * 60)) % 60)).padStart(2, "0");
  const second = String(Math.floor((time / 1000) % 60)).padStart(2, "0");

  return `${hour}:${minute}:${second}`;
};
