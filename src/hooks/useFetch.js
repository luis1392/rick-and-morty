import { useState, useEffect, useCallback, useRef } from "react";

import { URL_API } from "../utils/apiUrl";
// *******
// A simple fetch (GET) API data
// *******
const useFetch = (url) => {
  const mountedRef = useRef(true);
  const [response, setResponse] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch data.
  // You must pass de headers object.
  const getData = useCallback(
    async (headers) => {
      await fetch(`${URL_API}${url}`, headers)
        .then(async (res) => await handleErrors(res))
        .then(async (responseData) => await responseData)
        .catch(async (error) => console.log(await error));
    },
    [url]
  );

  useEffect(() => {
    //  Controller and headers declaration.
    const controller = new AbortController();
    const signal = controller.signal;
    const headers = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      signal,
    };

    getData(headers);

    // clean up.
    return () => {
      controller.abort();
    };
  }, [getData]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  //  Handle errors.
  const handleErrors = async (res) => {
    const data = await res.json();

    if (res.status === 404 || res.status === 401) {
      setError(true);
      setMessage("Ocurrió un error al tratar de cargar los datos.");
    } else if (res.status === 200) {
      setResponse(data);
      setError(false);
      setMessage(null);
    } else {
      // ...set states.
      setError(true);
      setMessage("Ocurrió un error al tratar de cargar los datos.");
    }
    setLoading(false);
    return data;
  };
  if (url === undefined) {
    return null;
  }
  return { response, error, message, loading };
};

export default useFetch;
