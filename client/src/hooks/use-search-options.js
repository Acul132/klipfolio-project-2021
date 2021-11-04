import { useFetchApi } from 'hooks/use-fetch';

export const useSearchOptions = () => {
  return useFetchApi(`/search-options`);
}