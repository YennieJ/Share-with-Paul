import styled, { css } from "styled-components";

export const Day = styled.li`
  height: 100%;

  padding-top: 6px;

  position: relative;
`;

export const CheckDate = styled.div`
  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  ${(props) =>
    props.isGrayed &&
    css`
      color: gray;
      opacity: 0.4;
    `};
  ${(props) =>
    props.isToday &&
    css`
      background-color: gray;
      color: aliceblue;
      border-radius: 50%;
    `}
  ${(props) =>
    props.selectDate &&
    css`
      background-color: black;
      color: aliceblue;
      border-radius: 100px;
    `}
`;

export const CheckTodoThings = styled.span`
  position: absolute;
  bottom: 10px;

  ${(props) =>
    props.checkTodoThings &&
    css`
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 50%;
      background-color: red;
      opacity: 0.4;
    `}
`;
