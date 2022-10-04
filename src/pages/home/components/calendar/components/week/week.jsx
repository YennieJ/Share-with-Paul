import React, { useState, useEffect } from "react";

import * as S from "./week.styled";

function Day({ date, setDate, startDay, todos, prevMonth, nextMonth }) {
  const [week, setWeek] = useState([]);

  useEffect(() => {
    let itemList = [];

    for (let i = 0; i < 7; i++) {
      let current = startDay.add(i, "day");

      const selectedDateData = Object.keys(todos).filter(
        (item) => todos[item].date === current.format("YYYYMMDD")
      );

      //할일이 있나요?
      let checkTodoThings = selectedDateData.length > 0;

      //오늘 표시하기
      let isToday = date.format("YYYYMMDD") === current.format("YYYYMMDD");

      //이번 달이 아닌 다른 달의 날짜
      let isGrayed = current.format("MM") !== date.format("MM");

      //선택 된 날짜
      let selectDate = current.format("YYYYMMDD") === date.format("YYYYMMDD");

      //투두리스트랑 화면 컨트롤
      const selectedDate = () => {
        if (current.format("MM") === date.subtract(1, "month").format("MM")) {
          prevMonth();
        } else if (current.format("MM") === date.add(1, "month").format("MM")) {
          nextMonth();
        }
        setDate(current);
      };

      itemList.push(
        <>
          <S.CheckDate
            className="checkDate"
            isToday={isToday}
            isGrayed={isGrayed}
            selectDate={selectDate}
            onClick={selectedDate}
          >
            {current.format("D")}
          </S.CheckDate>
          <S.CheckTodoThings
            className="checkTodoThings"
            checkTodoThings={checkTodoThings}
          />
        </>
      );
    }

    setWeek(itemList);
  }, [date, nextMonth, prevMonth, setDate, startDay, todos]);

  return (
    <>
      {week.map((item, idx) => (
        <S.Day key={idx}>{item}</S.Day>
      ))}
    </>
  );
}

export default Day;
