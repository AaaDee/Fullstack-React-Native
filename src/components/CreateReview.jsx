import { Pressable, View, StyleSheet } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';
import { useSignIn } from '../hooks/useSignIn';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useCreateReview } from '../hooks/useCreateReview';


const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Owner is required'),
  repositoryName: yup
    .string()
    .required('Name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .typeError('you must specify a number')
    .min(0, 'Min value 0.')
    .max(100, 'Max value 100.'),
  text: yup
    .string()
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



const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="ownerName" placeholder="Repository owner" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" type="number" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" multiline placeholder="Review" />
      <Pressable onPress={onSubmit} style={styles.submit}>
        <Text style={styles.text}>Create Review</Text>
      </Pressable>
    </View>
  )
};

export const CreateReviewContainer = ({onSubmit}) => {
  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const review = {
      ...values,
      rating: Number.parseInt(values.rating)
    }
    try {
      const req = await createReview(review)
      const id = req.data.createReview.repository.id
      navigate(`/repository/${id}`)
    } catch (e) {
      console.log(e);
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} />
}



export default CreateReview;