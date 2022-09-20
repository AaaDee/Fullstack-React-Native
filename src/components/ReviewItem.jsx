import { StyleSheet, View } from 'react-native';
import RatingNumber from './RatingNumber';
import ReviewContent from './ReviewContent';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
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

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <RatingNumber value={review.rating}/>
      <ReviewContent review={review}/>
    </View>
  )
}

export default ReviewItem