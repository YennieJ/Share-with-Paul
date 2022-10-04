import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0 60px;

  display: flex;
  align-items: end;
`;

export const Month = styled.div`
  display: flex;
  align-items: end;

  height: 100%;
`;

export const Now = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;

  margin-right: 30px;
  padding-right: 30px;

  width: 254px;

  border-right: 2px solid black;

  .year,
  .month {
    line-height: 1;
  }

  .year {
    font-size: 2rem;
  }

  .month {
    font-size: 3rem;
  }
`;

export const Date = styled.span`
  width: 100px;

  margin-right: 30px;

  font-size: 3rem;
  line-height: 1;
  text-align: end;
`;

export const ControlMonth = styled.div`
  display: flex;
`;
