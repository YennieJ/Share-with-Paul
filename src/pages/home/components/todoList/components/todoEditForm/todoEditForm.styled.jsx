import styled from "styled-components";

export const TodoEditFormStyle = styled.section`
  width: 100%;
  height: 100%;
  max-height: 480px;

  overflow: hidden;

  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  background-color: #fff;

  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  overflow: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  &:first-of-type {
    margin-right: 20px;
  }

  strong {
    display: block;

    font-size: 20px;

    width: 100%;
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid black;
  }
`;
