// atom
import { atom } from "recoil";
import { RecoilAtomKeys } from "../RecoilKeys";

const loginState = atom({
  key: RecoilAtomKeys.LOGIN_STATE, // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
export default loginState;
