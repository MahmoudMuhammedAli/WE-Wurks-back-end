import React from "react";
import DaysDirectory from "./components/days-directory";
import Styles from "./timeline.module.scss";

const Timeline = (props) => {
  return (
    <div className={Styles.timeline}>
      <DaysDirectory />
    </div>
  );
};

export default Timeline;
