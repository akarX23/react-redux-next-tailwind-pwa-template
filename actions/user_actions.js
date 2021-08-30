import { ACTION_TYPES } from "../helpers/utils";

// Sample action
export async function auth() {
  return async function (dispatch) {
    return dispatch({
      type: ACTION_TYPES.AUTH,
      payload: { details: { name: "Ritik Agrawal" } },
    });
  };
}
