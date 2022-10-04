import styled, { css } from "styled-components";

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;

  ${({ checked }) =>
    checked
      ? css`
          grid-template-columns: 10% 80% 10%;
        `
      : css`
          grid-template-columns: 10% 70% 10% 10%;
        `}

  .newText {
    width: 100%;

    margin-right: 10px;

    font-size: 14px;
  }

  .buttonBox {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
