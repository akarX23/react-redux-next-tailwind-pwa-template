export const ACTION_TYPES = Object.freeze({
  AUTH: "auth",
});

export const clamp = (value, clampAt) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};
