import { useRef, useEffect } from "react";

//Custom hook which uses useRef hook to determine if a component is mounted or not
export const useIsMounted = () => {

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};