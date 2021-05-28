import React from "react";
import { getDayName, getMonthName } from "../../../../../../../helpers";
import Styles from "./day-header.module.scss";

const DayHeader = ({ date }) => {
  if (!date) {
    return <header className={Styles.header}></header>;
  }

  const dayInNumbers = date.getDate();
  const fullDay = getDayName(date);
  const fullMonth = getMonthName(date);

  return (
    <header className={Styles.header}>
      {fullDay} , {dayInNumbers} {fullMonth}
    </header>
  );
};

export default DayHeader;
