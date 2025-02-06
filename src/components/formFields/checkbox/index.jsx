import { Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import { fielError } from "@/utills/fieldError";

const CheckboxField = (props) => {
  const {
    containerClass = "",
    name,
    labelSide = "right",
    label = "",
    labelClass = "",
    required = false,
    inputClass = "",
    children,
    errorElement = "span",
    errorMessageClassName = "",
  } = props;

  const formDetails = useSelector((state) => state?.FormDetails);
  let message = fielError(name, formDetails?.errors);

  return (
    <div className="w-auto flex flex-col gap-2.5">
      <div className="input-container">
        <div
          className={`${name} w-fit flex gap-2.5 items-baseline ${containerClass}`}
        >
          {labelSide === "left" && (
            <label
              className={`text-[#17181C] ${labelClass}`}
              htmlFor={`${name}Id`}
            >
              {label}
              {children}
            </label>
          )}
          <input
            className={`${inputClass}`}
            type={"checkbox"}
            name={name}
            id={`${name}Id`}
            required={required}
            autoComplete="off"
          />
          {labelSide === "right" && (
            <label
              className={`text-[#17181C] ${labelClass}`}
              htmlFor={`${name}Id`}
            >
              {label}
              {children}
            </label>
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

export default CheckboxField;
