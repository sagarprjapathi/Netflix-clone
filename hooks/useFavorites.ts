import fetcher from '@/lib/fetcher';
import useSwr from 'swr';

const useFavorites = () => {
  const { data, error, isLoading, mutate } = useSwr('/api/favorites', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useFavorites;
