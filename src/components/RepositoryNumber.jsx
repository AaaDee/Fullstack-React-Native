import { Pressable, StyleSheet, View } from 'react-native';
import Text from './Text';


const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  text: {
    alignSelf: 'center'
  }
});

function formatNumber(number) {
  if (number < 1000) return number
  const thousands = (number / 1000).toFixed(1)
  return `${thousands}k`
}

const RepositoryNumber = (props) => {
  const number = formatNumber(props.number)


  return <Pressable onPress={() => console.log('hi!')}>
      <View style={styles.container}>
        <Text fontWeight='bold' color='black' style={styles.text}>{number}</Text>
        <Text color='textSecondary' style={styles.text}>{props.label}</Text>
      </View>
    </Pressable>
};

export default RepositoryNumber;
