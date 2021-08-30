import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  thunk
)(createStore);

const makeStore = (context) => createStoreWithMiddleware(reducers);

export const wrapper = createWrapper(makeStore, { debug: true });
