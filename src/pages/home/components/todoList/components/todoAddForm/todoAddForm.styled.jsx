import styled from "styled-components";

export const Container = styled.form`
  min-height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoInput = styled.input.attrs({
  placeholder: "오늘의 할일을 입력하세요",
})`
  margin-right: 4px;

  font-size: 1rem;
  width: 50%;
  text-align: center;
  line-height: 28px;
`;
