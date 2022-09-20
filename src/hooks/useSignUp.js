import { useApolloClient, useMutation } from "@apollo/client";
import { CREATE_USER, SIGN_IN } from "../graphql/mutations";
import useAuthStorage
 from "./useAuthStorage";
export const useSignUp = () => {
  const [mutateCreate] = useMutation(CREATE_USER);
  const [mutateSignIn, result] = useMutation(SIGN_IN)
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage();
  


  const signUp = async ({ username, password }) => {
    await mutateCreate({variables: { username, password }})
    const result = await mutateSignIn({variables: { username, password }})  
    await authStorage.setAccessToken(result.data.authenticate.accessToken);
    apolloClient.resetStore();
    return result
  };

  return [signUp, result];
};
