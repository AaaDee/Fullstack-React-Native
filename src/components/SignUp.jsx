import { Pressable, View, StyleSheet } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';
import { useSignUp } from '../hooks/useSignUp';
import { useNavigate } from "react-router-dom";


const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Min length 1')
    .max(30, 'Max length 30')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Min length 5')
    .max(30, 'Max length 30')
    .required('Password is required'),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords don\'t match')
    .required('Password confirm is required')
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


const SignUpForm = ({ onSubmit }) => {
  return <View>
  <FormikTextInput name="username" placeholder="username" />
  <FormikTextInput secureTextEntry name="password" placeholder="password" />
  <FormikTextInput secureTextEntry name="passwordConfirmation" placeholder="confirm password" />
  <Pressable onPress={onSubmit} style={styles.submit}>
    <Text style={styles.text}>Sign Up</Text>
  </Pressable>
</View>
};

export const SignUpContainer = ({onSubmit}) => {
  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};


const SignUp = () => {
  const [SignUp] = useSignUp();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const req = await SignUp({ username, password });
      console.log(req);
      navigate('/')
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit}/>
};

export default SignUp;