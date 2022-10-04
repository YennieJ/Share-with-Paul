import React, { useState } from "react";
import dayjs from "dayjs";
import locale from "dayjs/locale/en";
import Header from "./components/header";
import Calendar from "./components/calendar";

import * as S from "./Home.styled";

const weekday = require("dayjs/plugin/weekday");
const weekOfYear = require("dayjs/plugin/weekOfYear");

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

const Home = () => {
  const now = dayjs().locale({
    ...locale,
  });

  const [date, setDate] = useState(now);

  // 이전달
  const prevMonth = () => {
    const minus = date.subtract(1, "month");
    setDate(minus);
  };

  // 다음달
  const nextMonth = () => {
    const plus = date.add(1, "month");
    setDate(plus);
  };

  return (
    <S.Container>
      <Header
        today={now}
        date={date}
        setDate={setDate}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <Calendar
        today={now}
        date={date}
        setDate={setDate}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
    </S.Container>
  );
};

export default Home;
