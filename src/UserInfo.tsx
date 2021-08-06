import { useRecoilValue } from "recoil";
import userName from "./recoil/asynchronous/withFullName";

function UserInfo() {
  const fullName = useRecoilValue(userName);
  return <>{fullName}</>;
}
export default UserInfo;
