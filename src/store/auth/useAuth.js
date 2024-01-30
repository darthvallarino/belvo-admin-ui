import { setAuth as setA } from "./auth.slice";
import { useSignInMutation } from "./auth.api";
import { useDispatch, useSelector } from "react-redux";
import useCallApiProcess from "@/hooks/useCallApiProcess";

export default function useAuth() {
  const [singInUser] = useSignInMutation();
  const { callApi: callApiSingInUser } = useCallApiProcess(
    singInUser,
    "Espere un momento por favor..."
  );
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const setAuth = (d) => {
    dispatch(setA(d));
  };

  const signIn = async ({ username, password }) => {
    try {
      const response = await callApiSingInUser({
        username,
        password,
      });
      console.log(response);
      if (!response.error) {
        setAuth({ user: username, ...response.data });
        return response;
      }
    } catch (e) {
      console.log(e);
    }
    return null;
  };

  return {
    auth,
    signIn,
  };
}
