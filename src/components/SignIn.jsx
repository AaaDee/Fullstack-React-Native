import { Pressable, View, StyleSheet } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';


const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const styles = StyleSheet.create({
  submit: {
    backgroundColor: theme.colors.primary,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontWeight: theme.fontWeights.bold
  }
});


const SignInForm = ({ onSubmit }) => {
  return <View>
  <FormikTextInput name="username" placeholder="username" />
  <FormikTextInput secureTextEntry name="password" placeholder="password" />
  <Pressable onPress={onSubmit} style={styles.submit}>
    <Text style={styles.text}>Sign In</Text>
  </Pressable>
</View>
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;