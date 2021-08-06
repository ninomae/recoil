import { selector } from "recoil";
import todoListState from "./atom";
import todoListFilterState from "./todoListFilterState";
import { RecoilSelectorStateKeys } from "../RecoilKeys";

const filteredTodoListState = selector({
  key: RecoilSelectorStateKeys.FILTERED_TODO_LIST_STATE,
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
export default filteredTodoListState;
