export const fielError = (fieldName = "", messages = []) => {
  let message = messages.find((item) => item.field === fieldName)?.message;
  return message;
};
