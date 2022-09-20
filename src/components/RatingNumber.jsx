import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 20,
    height: 40,
    width: 40,
    borderColor: 'blue',
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'blue',
  }
});

const RatingNumber = ({value}) => {
  return <View style={styles.container}>
    <Text style={styles.text}>{value}</Text>
  </View>
}

export default RatingNumber