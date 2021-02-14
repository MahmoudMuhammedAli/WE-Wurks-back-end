import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import addJobFormReducer from "./addjobReducer";
import subscriptionReducer from "./subscriptionsReducers";
import addStaffMemberReducer from "./addStaffMemberReducer";
import sendInvoiceFiles from "./sendInvoiceFilesReducer";
export default combineReducers({
  form: formReducer,
  addJobForm: addJobFormReducer,
  subscriptions: subscriptionReducer,
  addStaffMember: addStaffMemberReducer,
  sendInvoiceFiles,
});
