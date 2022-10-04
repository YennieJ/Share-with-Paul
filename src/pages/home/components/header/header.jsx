import React from "react";

import Button from "components/button";

import * as S from "./header.styled";

const Header = ({ today, date, setDate, prevMonth, nextMonth }) => {
  // 오늘로
  const goToday = () => {
    setDate(today);
  };

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
        <Button type="left" handleClick={prevMonth} />
        <Button type="goToday" handleClick={goToday} />
        <Button type="right" handleClick={nextMonth} />
      </S.ControlMonth>
    </S.Container>
  );
};

export default Header;
