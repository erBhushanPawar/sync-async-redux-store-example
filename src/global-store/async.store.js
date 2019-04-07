import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { default as thunk } from "redux-thunk";

const middleware = applyMiddleware(thunk, logger);

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH":
      console.log("Fetch");
      break;

    case "FETCHING":
      console.log("Fetching");
      break;
    case "FETCHED":
      console.log("Fetched");
      break;

    default:
      break;
  }
  return state;
};

const astore = createStore(reducer, {}, middleware);

astore.dispatch(dispatch => {
  dispatch({ type: "FETCH" });
  dispatch({ type: "FETCHING" });
  dispatch({ type: "FETCHED" });
});

export default astore;
