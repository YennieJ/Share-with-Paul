import React, { useState, useEffect } from "react";

import TodoList from "../todoList";
import Week from "./components/week";

import * as S from "./calendar.styled";

const Calendar = ({ today, date, setDate, prevMonth, nextMonth }) => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [todos, setTodos] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("Todo_Data");
      if (saved !== null) {
        return JSON.parse(saved);
      } else {
        return [];
      }
    }
  });
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const startWeek = date.startOf("month").week();
    const endWeek =
      date.endOf("month").week() === 1
        ? 53
        : date.clone().endOf("month").week();

    let itemList = [];

    for (let i = startWeek; i <= endWeek; i++) {
      itemList.push(date.startOf("week").week(i));
    }

    if (itemList.length === 5) {
    }

    setDates(itemList);
  }, [date]);

  return (
    <S.Content>
      <S.Container>
        <S.GridWeek className="dayOfTheWeek">
          {weekDays.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </S.GridWeek>
        {dates.map((item) => (
          <S.GridWeek key={item} className="week">
            <Week
              todya={today}
              date={date}
              setDate={setDate}
              startDay={item}
              todos={todos}
              prevMonth={prevMonth}
              nextMonth={nextMonth}
            />
          </S.GridWeek>
        ))}
      </S.Container>
      <TodoList date={date} todos={todos} setTodos={setTodos} />
    </S.Content>
  );
};

export default Calendar;
