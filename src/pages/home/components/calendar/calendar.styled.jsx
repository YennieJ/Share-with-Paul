import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const Container = styled.div`
  width: 45%;
  height: 100%;

  display: flex;
  flex-direction: column;

  margin-right: 20px;

  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

export const GridWeek = styled.ul`
  width: 100%;

  display: flex;
  justify-content: space-between;

  &:last-of-type {
    li {
      border-bottom: none;
    }
  }

  li {
    width: 100%;

    display: flex;
    justify-content: center;

    border-right: 1px solid black;
    border-bottom: 1px solid black;

    font-size: 18px;

    &:first-of-type {
      color: red !important;
    }

    &:last-of-type {
      border-right: none;
      color: blue !important;
    }
  }

  &.dayOfTheWeek {
    background: #757575;
    border-radius: 10px 10px 0 0;

    li {
      height: 60px;

      align-items: center;

      font-weight: 600;
      color: white;
      border-color: white;
    }
  }

  &.week {
    height: 80px;

    li {
      align-items: start;
    }
  }
`;
