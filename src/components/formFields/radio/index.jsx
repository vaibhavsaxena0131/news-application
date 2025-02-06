import React from "react";
import { useSelector } from "react-redux";
import { fielError } from "@/utills/fieldError";
import { Transition } from "@headlessui/react";

const RadioFields = (props) => {
  const {
    label = "",
    labelClass = "",
    name = "",
    defaultValue = "",
    containerClass = "",
    options = [],
    radioContainerClass = "flex flex-col gap-2",
    errorElement = "span",
    errorMessageClassName = "",
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
        <div className={`${radioContainerClass} radio-options px-1`}>
          {options.map((option, index) => (
            <div key={index} className="radio-option flex items-center gap-2 ">
              <input
                type="radio"
                id={`${name}_id_option_${index + 1}`}
                name={name}
                value={option.value}
                defaultChecked={defaultValue === option.value}
                className="radio-input cursor-pointer"
              />
              <label
                htmlFor={`${name}_id_option_${index + 1}`}
                className="radio-label text-slate-500 cursor-pointer"
              >
                {option.label}
              </label>
            </div>
          ))}
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

export default RadioFields;
