import React, { useState } from "react";
import dayjs from "dayjs";
import Header from "./components/header";
import Calendar from "./components/calendar";

import * as S from "./Home.styled";

const weekday = require("dayjs/plugin/weekday");
const weekOfYear = require("dayjs/plugin/weekOfYear");

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

const Home = () => {
  const today = dayjs();

  const [date, setDate] = useState(today);

  return (
    <S.Container>
      <Header today={today} date={date} setDate={setDate} />
      <Calendar today={today} date={date} setDate={setDate} />
    </S.Container>
  );
};

export default Home;
