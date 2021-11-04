import { useFetchApi } from 'hooks/use-fetch';

export const useServices = (amount) => {
  return useFetchApi(`/services/${amount || ""}`);
}