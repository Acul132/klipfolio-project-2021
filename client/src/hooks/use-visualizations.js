import { useFetchApi } from 'hooks/use-fetch';

export const useVisualizations = (amount) => {
  return useFetchApi(`/visualizations/${amount || ""}`);
}