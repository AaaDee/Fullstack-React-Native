import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";
export const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async (review) => {
    const result =  await mutate({variables: { review }})
    return result
  };

  return [createReview, result];
};
