import { HYDRATE } from "next-redux-wrapper";

const defaultReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload };
    default:
      return { ...state };
  }
};

export default defaultReducer;
