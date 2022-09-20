import { useParams } from 'react-router-native';
import { FlatList, StyleSheet, View } from 'react-native';
import useRepository from '../hooks/useRepository';
import ReviewItem from './ReviewItem';
import RepositoryInfo from './RepositoryInfo';
import theme from '../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.backround,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryPage = () => {
  const { id } = useParams()
  const { repository, fetchMore } = useRepository(id, 4)
  
  if (!repository) return null;

  const reviews = repository.reviews.edges.map(edge => edge.node);

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryPage;