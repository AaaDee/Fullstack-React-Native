import { Pressable, View, Text, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import * as Linking from 'expo-linking';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontWeight: theme.fontWeights.bold
  }
});

const RepositoryInfo = ({ repository }) => {
  const handlePress = () => {
    Linking.openURL(repository.url)
  }

  return (
    <View testID="repositoryPage">
      <RepositoryItem item={repository}/>
      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.text}>Go To GitHub Page</Text>
      </Pressable>
    </View>
  );
};

export default RepositoryInfo;