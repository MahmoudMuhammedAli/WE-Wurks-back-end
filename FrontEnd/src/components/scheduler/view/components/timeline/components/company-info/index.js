import React from "react";
import DayHeader from "../day-header";
import Styles from "./company-info.module.scss";

const CompanyInfo = (props) => {
  return (
    <div className={Styles.companyinfo}>
      <DayHeader />
      <div className={Styles.companyinfo__info}>
        <div className={Styles.companyinfo__logo}>SS</div>
        <div className={Styles.companyinfo__ownernames}>
          <p className={Styles.companyinfo__ownername}>signupfirstname</p>
          <div className={Styles.companyinfo__ownername}>signup lname</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
