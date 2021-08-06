import { useCallback } from "react";
import { useResetRecoilState } from "recoil";
import loginState from "./atom";

export const useLogout = () => {
  const login = useResetRecoilState(loginState);
  return useCallback(() => {
    login();
  }, [login]);
};
