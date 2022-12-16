import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdHome, MdPeople, MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";
import TodoModal from "./TodoModal";

const CircleButton = styled.button`
  background: #2c79b7;
  &:hover {
    background: #4a7eb2;
  }
  &:active {
    background: #115586;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 75px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const Menu = styled.div`
  width: 100%;
  height: 75px;
  bottom: 0;
  left: 0;
  position: absolute;

  display: flex;

  border-top: 1px solid #e9ecef;
  a {
    &:hover {
      background: #e9ecef;
    }
    &:active {
      background: #dee2e6;
    }
    flex: 1;
    font-size: 50px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function TodoMenu() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <TodoModal toggle={onToggle} header="할일 추가">
          <InsertForm onSubmit={onSubmit}>
            <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" onChange={onChange} value={value} />
          </InsertForm>
        </TodoModal>
      )}

      <Menu>
        <Link to="/">
          <MdHome />
        </Link>
        <Link to="/info">
          <MdPeople />
        </Link>
      </Menu>
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoMenu);
