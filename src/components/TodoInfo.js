import React from "react";
import styled from "styled-components";
import ProfileImg from "../img/pepe.webp";

const TodoInfoBlock = styled.div`
  flex: 1;
  padding-bottom: 48px;
  overflow-y: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    margin: 0;
  }
  h2 {
    margin: 0;
  }
`;

const Profile = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 300px;
  margin-top: 30px;
  margin-bottom: 50px;
`;

function TodoInfo() {
  return (
    <TodoInfoBlock>
      <Profile src={ProfileImg} />
      <h1>위현우</h1>
      <h2>github : wihyun</h2>
    </TodoInfoBlock>
  );
}

export default TodoInfo;
