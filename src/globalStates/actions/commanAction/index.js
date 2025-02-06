export const resetReduxState = (name = "ALL") => ({
  type: `RESET_${name}_STATE`,
});
