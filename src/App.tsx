import React, { Suspense } from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import TodoList from "./TodoList";
import UserInfo from "./UserInfo";
// import CharacterCounter from "./CharacterCounter";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={"loading"}>
        <UserInfo />
      </Suspense>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
