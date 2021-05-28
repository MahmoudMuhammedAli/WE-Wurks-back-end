import React, { useEffect, useState } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import { getDayName, getMonthName } from "../../../../../../../helpers";
import CompanyInfo from "../company-info";
import Day from "../day";
import Styles from "./days-directory.module.scss";

const DaysDirectory = (props) => {
  const [numberOfDays, setNumberOfDays] = useState(5);
  let firstDay = new Date();
  const [days, setDays] = useState({ 0: new Date() });
  useEffect(() => {
    let dates = { ...days };
    for (let i = 1; i < numberOfDays; i++) {
      let date = new Date();
      date.setDate(firstDay.getDate() + i);
      dates = { ...dates, [i]: date };
    }
    setDays(dates);
  }, []);

  const Days = () => {
    let jsxArray = [];
    for (let dayDate in days) {
      if (dayDate == "1") {
        jsxArray.push(<Day date={days[dayDate]} numOfJobTasks={1} />);
        continue;
      }
      jsxArray.push(<Day date={days[dayDate]} />);
    }
    return jsxArray;
  };

  return (
    <div className={Styles.directory}>
      <CompanyInfo />
      <Days />
    </div>
  );
};
export default DaysDirectory;
