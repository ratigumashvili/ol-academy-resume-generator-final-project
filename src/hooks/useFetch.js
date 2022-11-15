import { useEffect, useState } from "react";
import {
  setDataWithExpiry,
  getDataWithExpiry,
} from "../helpers/getLocalStorage";

const URL = `https://my-json-server.typicode.com/ratigumashvili/resume-generator-db/db`;

const useFetch = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setDataWithExpiry("resume-gen-data", data, 600000);
      setFetchedData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("resume-gen-data")) {
      setFetchedData(getDataWithExpiry("resume-gen-data"));
    } else {
      fetchData();
    }
  }, []);

  return { fetchedData, loading };
};

export default useFetch;
