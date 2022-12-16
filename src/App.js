import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoHead from "./components/TodoHead";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import TodoMenu from "./components/TodoMenu";
import TodoInfo from "./components/TodoInfo";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <Routes>
            <Route path="/" element={<TodoList />}></Route>
            <Route path="/info" element={<TodoInfo />}></Route>
          </Routes>
          <TodoMenu />
        </TodoTemplate>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
