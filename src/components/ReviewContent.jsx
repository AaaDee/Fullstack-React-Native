import { Text, View, StyleSheet } from "react-native"
import { format } from "date-fns";

const styles = StyleSheet.create({
  username: {
    fontWeight: 'bold',
    color: 'black'
  },
  date: {
    color: 'grey'
  },
  container: {
    flexShrink: 1
  }

});

const ReviewContent = ({review}) => {
  return <View style={styles.container}>
    <Text style={styles.username}>{review.user.username}</Text>
    <Text style={styles.date}>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
    <Text>{review.text}</Text>
  </View>
}

export default ReviewContent