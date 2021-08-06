import { atom } from "recoil";
import { RecoilSelectorStateKeys } from "../RecoilKeys";

const todoListFilterState = atom({
  key: RecoilSelectorStateKeys.TODO_LIST_FILTER_STATE,
  default: "Show All",
});
export default todoListFilterState;
