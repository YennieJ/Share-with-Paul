import styled, { css } from "styled-components";

export const CheckboxWrapper = styled.div`
  position: relative;

  width: 20px;
  height: 20px;

  margin-right: 10px;
`;

export const CheckboxType = styled.input`
  visibility: hidden;

  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: #66bb6a;
          border-color: #66bb6a;
          &:after: {
            opacity: 1;
          }
        `
      : null}
`;

export const Label = styled.label`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;

  width: 100%;
  height: 100%;

  position: absolute;
  right: 0;
  bottom: 0;
  ${({ isChecked }) => {
    return isChecked
      ? css`
          background-color: #66bb6a;
          border-color: #66bb6a;
          &:after {
            border: 2px solid #fff;
            border-top: none;
            border-right: none;
            content: "";
            width: 8px;
            height: 4px;

            position: absolute;
            top: 4px;
            left: 4px;
            transform: rotate(-45deg);
          }
        `
      : css`
          background-color: #fff !important;
          &:after {
            opacity: 1;
          }
        `;
  }}
`;
