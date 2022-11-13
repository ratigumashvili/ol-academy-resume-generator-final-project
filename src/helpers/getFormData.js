import { formValues } from "../tempData";

export const getFormData = () => {
  const storedValues = localStorage.getItem("form");
  if (!storedValues) {
    return formValues;
  }
  return JSON.parse(storedValues);
};
