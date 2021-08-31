import { ACTION_TYPES } from "../helpers/utils";

// Sample action
export function auth() {
  console.log("Called");
  return function (dispatch) {
    return dispatch({
      type: ACTION_TYPES.AUTH,
      payload: { details: { name: "Ritik Agrawal" } },
    });
  };
}
