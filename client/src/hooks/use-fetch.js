import { useState, useEffect } from "react";
import { useIsMounted } from "hooks/use-is-mounted";

export const useFetchApi = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const isMounted = useIsMounted();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`);
        const json = await response.json();
        if(isMounted.current) 
          setData(json)
      } catch (error) {
        if(isMounted.current) 
          setError(error)
      }
      if(isMounted.current)   
        setIsLoading(false)
    }
    fetchData()
  }, [url, isMounted])

  return { isLoading, data, error };
}