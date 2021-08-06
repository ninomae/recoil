import { useCallback } from "react";
import { useResetRecoilState } from "recoil";
import loginState from "./atom";

export const useLogin = () => {
  const login = useResetRecoilState(loginState);
  return useCallback(() => {
    login();
  }, [login]);
};
