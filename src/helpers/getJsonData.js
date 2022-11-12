const exportAsJson = (element, title) => {
  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(element)
  )}`;
  const link = document.createElement("a");
  link.href = jsonString;
  link.download = title;

  link.click();
};

export default exportAsJson;
