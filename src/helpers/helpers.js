import moment from "moment";

export const getProgressBar = (curr, total) => {
  return (curr / total) * 100;
};

export const getCurrent = (curr, total) => {
  return curr + " / " + total;
};

export const getEmptyValues = (obj) => {
  return Object.values(obj).every((item) => item === "");
};

export const formatted_date = () => {
  return moment().format("MMMM Do YYYY, h:mm:ss");
};
