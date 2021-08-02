// atom
import { atom } from "recoil";
import { RecoilAtomKeys } from "../RecoilKeys";

const textState = atom({
  key: RecoilAtomKeys.CHARACTER_STATE, // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export default textState;
