import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sorting, first) => {
  const [repositories, setRepositories] = useState();

  let variables = {first}

  switch (sorting) {
    case ('latest'):
      variables.orderBy = 'CREATED_AT'
      break;
    case ('best'):
      variables.orderBy = 'RATING_AVERAGE'
      break;
    case ('worst'):
      variables.orderBy = 'RATING_AVERAGE'
      variables.orderDirection = 'ASC'
  }

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };



  const { data, loading, fetchMore, refetch, ...result } = useQuery(GET_REPOSITORIES, { 
    variables 
  })

  useEffect(() => {
    if (data) {
      setRepositories(data.repositories);
    }
  }, [data]);

  return {
    repositories: repositories,
    fetchMore: handleFetchMore,
    loading,
    refetch,
    ...result,
  };
};

export default useRepositories;