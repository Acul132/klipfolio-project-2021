import { useFetchApi } from 'hooks/use-fetch';

export const useDataSources = (amount) => {
  return useFetchApi(`/data-sources/${amount || ""}`);
}