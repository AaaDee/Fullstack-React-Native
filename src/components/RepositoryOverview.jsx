import { StyleSheet, View } from 'react-native';
import Text from './Text';
import LanguageTag from './LanguageTag';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    justifyContent: 'space-evenly'
  },
  languageTag: {
    backgroundColor: 'blue',
    color: 'white'
  },
  text: {
    marginBottom: 4
  }
});

const RepositoryOverview = (props) => {
  return <View style={styles.container}>
    <Text style={styles.text} fontWeight='bold'>{props.name}</Text>
    <Text style={styles.text}  color='textSecondary'>{props.description}</Text>
    <LanguageTag language={props.language}/>
  </View>

};

export default RepositoryOverview;