import React from "react";
import DayHeader from "../day-header";
import ScheduledJobItem from "../scheduled-job-item";
import Styles from "./day.module.scss";

const Day = ({ date, numOfJobTasks }) => {
  const renderJobtask = () => {
    let tasks = [];

    for (let i = 0; i < numOfJobTasks; i++) {
      tasks.push(<ScheduledJobItem />);
    }
    return tasks;
  };
  return (
    <div className={Styles.day}>
      <DayHeader date={date} />
      <div className={Styles.day__tasks}>{renderJobtask()}</div>
    </div>
  );
};

export default Day;
