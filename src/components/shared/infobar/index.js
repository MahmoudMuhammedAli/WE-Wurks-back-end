import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InvoiceModal from "../sendinvoicemodal";
import SignInModal from "../signin-modal";
import SignUpModal from "../signup-modal";
import Styles from "./infobar.module.scss";

const AuthStatus = ({
  setIsSignedInModalOpened,
  setIsSigenedUpModalOpened,
}) => {
  const { auth } = useSelector((state) => state);
  const renderUserEmail = () => {
    if (auth.user) return auth.user.email;
    return "Not Authenticated";
  };

  const renderInfoBarAuth = () => {
    if (auth.user) {
      return <span></span>;
    }

    return (
      <div className={Styles.infobar__auth}>
        <button
          className={`${Styles.infobar__auth__btn} ${Styles.infobar__auth__signupbtn}`}
          onClick={() => setIsSigenedUpModalOpened(true)}
        >
          SignUp
        </button>
        <button
          className={`${Styles.infobar__auth__btn} ${Styles.infobar__auth__loginbtn}`}
          onClick={() => setIsSignedInModalOpened(true)}
        >
          logIn
        </button>
      </div>
    );
  };

  return (
    <>
      <div className={`${Styles.infobar__info}`}>{renderUserEmail()}</div>
      {renderInfoBarAuth()}
    </>
  );
};
const InfoBar = (props) => {
  const [isSignInModalOpened, setIsSignedInModalOpened] = useState(false);
  const [isSignedUpModalOpened, setIsSigenedUpModalOpened] = useState(false);

  return (
    <div className={`${Styles.infobar}`}>
      <h4 className={`${Styles.infobar__name}`}>INfo Bar</h4>
      <Link to='/system'>System</Link>
      <AuthStatus
        setIsSignedInModalOpened={setIsSignedInModalOpened}
        setIsSigenedUpModalOpened={setIsSigenedUpModalOpened}
      />
      <SignInModal
        isOpened={isSignInModalOpened}
        setIsOpened={setIsSignedInModalOpened}
      />
      <SignUpModal
        isOpened={isSignedUpModalOpened}
        setIsOpened={setIsSigenedUpModalOpened}
      />
    </div>
  );
};
export default InfoBar;
