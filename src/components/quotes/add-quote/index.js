import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Styles from "./add-quote.module.scss";
import CostItems from "./components/cost-items";
import FilesAndNotes from "./components/files-and-notes";
import Quote from "./components/quote";
import SideBar from "./components/sidebar";

const AddQuote = (props) => {
  return (
    <div className={Styles.addquote}>
      <SideBar />
      <Route path='/jobs/quotes/add' exact component={Quote} />
      <Route path='/jobs/quotes/add/costitems' component={CostItems} />
      <Route path='/jobs/quotes/add/filesandnotes' component={FilesAndNotes} />
      <Redirect to='/jobs/quotes/add' />
    </div>
  );
};

export default AddQuote;
