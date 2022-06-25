import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import Text from './Text';


const styles = StyleSheet.create({
  container: {
    alignSelf: 'baseline',
    backgroundColor: theme.colors.primary,
    padding: 2,
    borderRadius: 8 
  },
  text: {
    color: 'white'
  }
});

const LanguageTag = (props) => {
  return <View style={styles.container}>
        <Text style={styles.text}>{props.language}</Text>
      </View>
    
};

export default LanguageTag;