import React from "react";
import AuthFormCollector from "../auth-form-collector";
import Modal from "../modal";
import Styles from "./signin-modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { encodeObject } from "../../../helpers";
import { setUser } from "../../../actions";

const LogInButton = () => {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleLogInClick = () => {
    console.log(form, "from form");
    const values = form.authCollector.values;

    const formBody = encodeObject(values);

    fetch("http://localhost:4000/login", {
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
        dispatch(setUser(data.user));
      })

      .catch((err) => {
        alert("something erro happened!!");
        console.log(err.message, "Some thing error happend!!!!!!");
      });
  };
  return <button onClick={handleLogInClick}>Log In</button>;
};
const SignInModal = ({ isOpened, setIsOpened }) => {
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

export default SignInModal;
