import React, { useState, useEffect } from "react";

import TodoList from "../todoList";
import Week from "./components/week";

import * as S from "./calendar.styled";

const Calendar = ({ today, date, setDate }) => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [dates, setDates] = useState([]);
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

  useEffect(() => {
    let itemList = [];
    let startWeek = date.startOf("month").week();
    let endWeek =
      date.endOf("month").week() === 1
        ? 53
        : date.clone().endOf("month").week();

    for (let i = startWeek; i <= endWeek; i++) {
      itemList.push(date.startOf("week").week(i));
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
              today={today}
              date={date}
              setDate={setDate}
              startDay={item}
              todos={todos}
            />
          </S.GridWeek>
        ))}
      </S.Container>
      <TodoList date={date} todos={todos} setTodos={setTodos} />
    </S.Content>
  );
};

export default Calendar;
