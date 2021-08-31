import { HYDRATE } from "next-redux-wrapper";
import { ACTION_TYPES } from "../helpers/utils";

const defaultReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload };
    case ACTION_TYPES.AUTH:
      return { ...state, details: payload.details };
    default:
      return { ...state };
  }
};

export default defaultReducer;
