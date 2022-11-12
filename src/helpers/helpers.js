export const getProgressBar = (curr, total) => {
  return (curr / total) * 100;
};

export const getCurrent = (curr, total) => {
  return curr + " / " + total;
};

export const getEmptyValues = (obj) => {
  return Object.values(obj).every((item) => item === "");
};
