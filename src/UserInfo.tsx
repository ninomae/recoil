import { useRecoilState, useRecoilValue } from "recoil";
import userName from "./recoil/login/withUser";
import loginState from "./recoil/login/atom";
import { useLogout } from "./recoil/login/useLogout";
import { useState } from "react";

function UserInfo() {
  const user = useRecoilValue(userName);
  const [login, setLogin] = useRecoilState(loginState);
  const logout = useLogout();
  const [hoge, setHoge] = useState(0);
  return (
    <>
      {user.name.last}
      {login ? (
        <button onClick={() => logout()}>ログアウト</button>
      ) : (
        <button
          onClick={() => {
            setHoge((h) => h++);
            setLogin(hoge % 2 === 0 ? 2 : 1);
          }}
        >
          ログイン
        </button>
      )}
    </>
  );
}
export default UserInfo;
