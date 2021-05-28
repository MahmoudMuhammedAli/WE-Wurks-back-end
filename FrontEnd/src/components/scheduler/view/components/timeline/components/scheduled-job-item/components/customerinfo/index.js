import React from "react";
import Styles from "./customerinfo.module.scss";

const CustomerInfo = (props) => {
  return (
    <div className={Styles.customerinfo}>
      <span>second job postCode</span>
      <span className={Styles.customerinfo__arrow}>►</span>
      <div>
        <span>customer fname</span> <span>customer lname</span>
      </div>
    </div>
  );
};
export default CustomerInfo;
