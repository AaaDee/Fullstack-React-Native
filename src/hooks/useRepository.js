import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';


const useRepository = (id) => {
  const [repository, setRepository] = useState();
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, { 
    variables: { id },
    fetchPolicy: 'cache-and-network' 
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        id,
      },
    });
  };

  useEffect(() => {
    if (data) {
      setRepository(data.repository);
    }
  }, [data]);

  return {
    repository,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepository;