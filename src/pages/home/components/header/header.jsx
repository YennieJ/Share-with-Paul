import React from "react";

import Button from "components/button";

import * as S from "./header.styled";

const Header = ({ today, date, setDate }) => {
  return (
    <S.Container>
      <S.Month>
        <S.Now>
          <span className="year">{date.format("YYYY")}</span>
          <span className="month">{date.format("MMMM")}</span>
        </S.Now>
        <S.Date>{date.format("D일")}</S.Date>
      </S.Month>

      <S.ControlMonth>
        <Button
          type="left"
          handleClick={() => setDate(date.subtract(1, "month"))}
        />
        <Button type="goToday" handleClick={() => setDate(today)} />
        <Button
          type="right"
          handleClick={() => setDate(date.add(1, "month"))}
        />
      </S.ControlMonth>
    </S.Container>
  );
};

export default Header;
