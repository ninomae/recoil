import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import TodoList from "./TodoList";
// import CharacterCounter from "./CharacterCounter";

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
