import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';



const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 100,
    backgroundColor: theme.colors.appBar,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white'
  },
  scroll: {
    flexGrow: 1
  },
  link: {
    padding: 5
  }
});

const AppBar = () => {
  return <Pressable onPress={() => console.log('hi!')}>
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <Link to='/' style={styles.link}>
          <Text style={styles.text}>Repositories</Text>
        </Link>
        <Link to='/signin' style={styles.link}>
          <Text style={styles.text}>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  </Pressable>
};

export default AppBar;