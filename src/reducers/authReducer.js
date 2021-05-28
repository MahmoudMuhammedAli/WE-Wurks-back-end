import { SET_USER } from "../actions/actionsTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload };

    default:
      return state;
  }
};
