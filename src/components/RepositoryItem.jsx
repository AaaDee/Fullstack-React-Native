import { StyleSheet, View } from 'react-native';
import AuthorImage from './AuthorImage';
import RepositoryNumber from './RepositoryNumber';
import RepositoryOverview from './RepositoryOverview';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10
  },
  upperBox: {
    flexDirection: 'row',
  },
  lowerBox: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    color: 'white'
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container} testID="repositoryItem">
      <View style={styles.upperBox}>
        <AuthorImage uri={item.ownerAvatarUrl} />
        <RepositoryOverview 
          name={item.fullName}
          description={item.description}
          language={item.language}
        />
      </View>
      <View style={styles.lowerBox}>
        <RepositoryNumber 
          number={item.stargazersCount}
          label='Stars'
        />
        <RepositoryNumber 
          number={item.forksCount}
          label='Forks'
        />
        <RepositoryNumber 
          number={item.reviewCount}
          label='Reviews'
        />
        <RepositoryNumber 
          number={item.ratingAverage}
          label='Rating'
        />
      </View>
    </View>
  );
};

export default RepositoryItem;


// return (
//   <View>
//     <Text>Full name: {item.fullName}</Text>
//     <Text>Description: {item.description}</Text>
//     <Text>Language: {item.Language}</Text>
//     <Text>Stars: {item.stargazersCount}</Text>
//     <Text>Forks: {item.forksCount}</Text>
//     <Text>Reviews: {item.reviewCount}</Text>
//     <Text>Rating: {item.ratingAverage}</Text>
//   </View>
// );