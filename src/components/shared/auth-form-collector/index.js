import React from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./auth-form-collector.module.scss";

const AuthFormCollector = (props) => {
  return (
    <div className={Styles.collector}>
      <div className={Styles.collector__inputwrapper}>
        <label>Enter a Name:</label>
        <Field name='name' component='input' type='text' />
      </div>
      <div className={Styles.collector__inputwrapper}>
        <label>Enter a Password:</label>
        <Field name='password' component='input' type='password' />
      </div>
      <div className={Styles.collector__inputwrapper}>
        <label>Enter an Email:</label>
        <Field name='email' component='input' type='email' />
      </div>
    </div>
  );
};

export default reduxForm({ form: "authCollector" })(AuthFormCollector);
