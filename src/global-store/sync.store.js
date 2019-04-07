import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const error = store => next => action => {
  console.log("Action fired..", action);
  if (action.type === "CHANGE_CREDS") {
    console.warn("Change creds not allowed");
  } else {
    next(action);
  }
};

const middleware = applyMiddleware(error, logger);

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      state = { ...state, name: action.payload };
      break;
    case "CHANGE_PROFILE_PIC":
      state = { ...state, profilePic: action.payload };
      break;

    default:
      break;
  }
  return state;
};

const projectsReducer = (state = [], action) => {
  return state;
};

const reducers = combineReducers({
  user: userReducer,
  projects: projectsReducer
});

const store = createStore(reducers, {}, middleware);

store.subscribe(() => {
  console.log("Store changed", store.getState());
});

store.dispatch({ type: "CHANGE_NAME", payload: "Bhushan P" });

store.dispatch({
  type: "CHANGE_PROFILE_PIC",
  payload:
    "https://lh3.googleusercontent.com/a-/AAuE7mCEwKBAfc8dQLow4caIr5FPMAYXg_nzKkkzaHNcaQ=s150"
});

export default store;
