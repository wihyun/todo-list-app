import React, { useReducer, createContext, useContext, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    text: "일어나기",
    done: true,
  },
  {
    id: 2,
    text: "아침먹고 씻기",
    done: true,
  },
  {
    id: 3,
    text: "Pre-Project 개발 준비하기",
    done: false,
  },
  {
    id: 4,
    text: "Pre-Project 기능 구현하기",
    done: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT":
      state[action.id - 1].text = action.value;
      return state.map((todo) => todo);

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>{children}</TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}
