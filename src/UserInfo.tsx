import { useRecoilState, useRecoilValue } from "recoil";
import userName from "./recoil/login/withUser";
import loginState from "./recoil/login/atom";
import { useLogout } from "./recoil/login/useLogout";

function UserInfo() {
  const user = useRecoilValue(userName);
  const [login, setLogin] = useRecoilState(loginState);
  const logout = useLogout();
  return (
    <>
      {user.name.last}
      {login ? (
        <button onClick={() => logout()}>ログアウト</button>
      ) : (
        <button onClick={() => setLogin(Math.random())}>ログイン</button>
      )}
    </>
  );
}
export default UserInfo;
