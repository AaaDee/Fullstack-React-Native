import { useApolloClient, useQuery } from '@apollo/client';
import Constants from 'expo-constants';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';
import { ME } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';
import theme from '../theme';
import Text from './Text';



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
  const userQuery = useQuery(ME)
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const signOut = () => {
    authStorage.removeAccessToken()
    apolloClient.resetStore()
  }

  return <Pressable onPress={() => {}}>
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <Link to='/' style={styles.link}>
          <Text style={styles.text}>Repositories</Text>
        </Link>
        {userQuery.data?.me ?
          <>
            <Link to='/review' style={styles.link}>
              <Text style={styles.text}>Create Review</Text>
            </Link>
            <Pressable onPress={signOut} style={styles.link}>
              <Text style={styles.text}>Sign Out</Text>
            </Pressable>
          </> :
          <>
            <Link to='/signin' style={styles.link}>
              <Text style={styles.text}>Sign In</Text>
            </Link>
            <Link to='/signup' style={styles.link}>
              <Text style={styles.text}>Sign Up</Text>
            </Link> 
          </>
        }
      </ScrollView>
    </View>
  </Pressable>
};

export default AppBar;