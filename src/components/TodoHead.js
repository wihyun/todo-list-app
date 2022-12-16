import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .date {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
`;

function TodoHead() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  return (
    <TodoHeadBlock>
      <h1>wihyun</h1>
      <div className="date">{dateString}</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
