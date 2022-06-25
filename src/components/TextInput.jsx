import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 2
  }, error: {
    borderColor: theme.colors.error
  }
});


const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.text, 
    style,
    error && styles.error
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;