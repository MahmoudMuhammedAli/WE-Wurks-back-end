import React from "react";
import AuthFormCollector from "../auth-form-collector";
import Modal from "../modal";
import Styles from "./signup-modal.module.scss";
import { useSelector } from "react-redux";
import { encodeObject } from "../../../helpers";

const LogInButton = () => {
  const form = useSelector((state) => state.form);

  const handleLogInClick = () => {
    console.log(form, "from form");
    const values = form.authCollector.values;

    const formBody = encodeObject(values);

    fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Successed");
        console.log(data, "from data");
      })

      .catch((err) => {
        alert("something erro happened!!");
        console.log(err, "Some thing error happend!!!!!!");
      });
  };
  return <button onClick={handleLogInClick}>Log In</button>;
};
const SignUpModal = ({ isOpened, setIsOpened }) => {
  return (
    <Modal isOpen={isOpened}>
      <div className={Styles.signin}>
        <button onClick={() => setIsOpened(false)}>Close</button>
        <AuthFormCollector />
        <LogInButton />
      </div>
    </Modal>
  );
};

export default SignUpModal;
