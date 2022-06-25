import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 9
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const AuthorImage = (props) => {
  return <Image 
    style={styles.tinyLogo}
    source={{
      uri: props.uri,
    }} 
  />
};

export default AuthorImage;