import { useSelector } from "react-redux";
import { fielError } from "@/utills/fieldError";
import { Transition } from "@headlessui/react";

const TextAreaField = (props) => {
  let {
    label = "",
    labelClass = "",
    id = "",
    name = "",
    defaultValue = "",
    cols = "",
    rows = "",
    placeholder = "",
    containerClass = "",
    textareaClassname = "",
    required = false,
    errorElement = "span",
    errorMessageClassName = "",
    inputContainerClass = "",
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
        <div className={`${name}_field flex gap-2 ${inputContainerClass}`}>
          <textarea
            className={`font-figtree font-normal text-sm leading-[21px] text-slate-500 py-[1.1rem] px-6 rounded-md border border-[#BBBDC8] w-full ${textareaClassname}`}
            placeholder={placeholder}
            required={required}
            defaultValue={defaultValue}
            name={name}
            id={`${name}_id ${id}`}
            cols={cols}
            rows={rows}
          ></textarea>
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

export default TextAreaField;
