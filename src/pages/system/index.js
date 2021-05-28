import React, { useEffect } from "react";
import "./system.scss";
import Jobs from "../../pages/jobs";
import Contacts from "../../pages/contacts";
import Settings from "../../pages/settings";
import Documents from "../../pages/documents";
import SideBar from "../../components/shared/sidebar";
import InfoBar from "../../components/shared/infobar";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import TermsAndConditions from "../../pages/consitionsandterms";
import Scheduler from "../scheduler";
import { useSelector } from "react-redux";

const RenderAuth = () => {
  const { auth } = useSelector((state) => state);
  const history = useHistory();
  useEffect(() => {
    if (!auth.user) {
      history.push("/");
    }
  });
  return <> </>;
};
const System = (props) => {
  return (
    <div className='system'>
      <SideBar />
      <InfoBar />
      <RenderAuth />
      <Switch>
        <Route path='/system/jobs' component={Jobs} />
        <Route path='/system/contacts' component={Contacts} />
        <Route path='/system/documents' component={Documents} />
        <Route path='/system/settings' component={Settings} />
        <Route
          path='/system/conditionsandterms'
          component={TermsAndConditions}
        />
        <Route path='/system/schedule' component={Scheduler} />
        <Redirect to='/system/jobs' />
      </Switch>
    </div>
  );
};

export default System;
