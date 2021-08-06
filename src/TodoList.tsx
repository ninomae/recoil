import { useRecoilValue } from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import filteredTodoListState from "./recoil/todo/filteredTodoListState";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./recoil/TodoListStats";

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
export default TodoList;
