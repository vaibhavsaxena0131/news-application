import { rules } from "./formRules";

export const validateForm = (formData, formName) => {
  const errors = [];
  let validationRules = rules[`${formName}_validation_rules`];
  for (const field in validationRules) {
    if (!Object.prototype.hasOwnProperty.call(validationRules, field)) continue;
    const value = formData[field].trim();
    const regex = validationRules[field];
    const ruleMessages = rules[`${formName}_error_message`];
    if (!value || value == null) {
      let message =
        ruleMessages?.[field]?.null_value_message ||
        "This field can't be blank.";
      errors.push({
        field,
        message,
      });
    } else if (regex && !regex.test(value)) {
      let message =
        ruleMessages?.[field]?.wrong_value_message ||
        "Please enter a valid Value";
      errors.push({
        field,
        message,
      });
    }
  }

  return errors;
};

export const getFormValues = (e, formName) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  let data = Object.fromEntries(formData.entries());

  // Modify data object to set true/false for checkboxes
  let hasErrors = validateForm(data, formName);

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    const name = checkbox.name;
    const value = data[name] === "on"; // Check if checkbox was checked
    data[name] = value;
  });

  if (!hasErrors.length) {
    return { isValid: true, data };
  } else {
    return { isValid: false, errors: hasErrors };
  }
};
