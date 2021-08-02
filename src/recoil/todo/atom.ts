import { atom } from "recoil";
import Todo from "./todo";
import { RecoilAtomKeys } from "../RecoilKeys";

const todoListState = atom<Todo[]>({
  key: RecoilAtomKeys.TODO_LIST_STATE,
  default: [],
});
export default todoListState;
