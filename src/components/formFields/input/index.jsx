import { useSelector } from "react-redux";
import { fielError } from "@/utills/fieldError";
import { Transition } from "@headlessui/react";

const InputField = (props) => {
  let {
    label = "",
    labelClass = "",
    type = "text",
    name = "",
    defaultValue = "",
    placeholder = "",
    containerClass = "",
    inputClass = "",
    rightIcon = "",
    rightIconClass = "",
    leftIcon = "",
    leftIconClass = "",
    required = false,
    errorElement = "span",
    errorMessageClassName = "",
    inputContainerClass = "",
    autoComplete = "off",
  } = props;

  const formDetails = useSelector((state) => state?.FormDetails);
  let message = fielError(name, formDetails?.errors);
  return (
    <div className={`${name} w-full flex flex-col gap-2.5 ${containerClass}`}>
      <div className="input-container flex flex-col gap-2">
        <label
          className={`text-[#17181C] font-bold ${labelClass}`}
          htmlFor={`${name}Id`}
        >
          {label}
        </label>
        <div
          className={`${name}_field px-4 py-3 border border-[#BBBDC8] rounded-md flex gap-2 ${inputContainerClass}`}
        >
          {leftIcon && (
            <div className={`w-[1.5rem] ${leftIconClass}`}>{leftIcon}</div>
          )}
          <input
            className={`w-full outline-none bg-transparent ${inputClass}`}
            type={type}
            name={name}
            id={`${name}Id`}
            placeholder={placeholder}
            required={required}
            autoComplete={type === "password" ? "new-password" : autoComplete}
            aria-autocomplete="none"
            defaultValue={defaultValue}
          />
          {rightIcon && (
            <div className={`w-[1.5rem] ${rightIconClass}`}>{rightIcon}</div>
          )}
        </div>
      </div>
      <Transition
        show={message !== ""}
        as={errorElement}
        className={`error-container text-red-700 font-medium text-sm ${errorMessageClassName}`}
      >
        {message}
      </Transition>
    </div>
  );
};

export default InputField;
