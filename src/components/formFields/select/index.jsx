import { Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { fielError } from "@/utills/fieldError";
import { useSelector } from "react-redux";
import Select from "react-select";
import { useState } from "react";

function isObject(objValue) {
  return (
    objValue && typeof objValue === "object" && objValue.constructor === Object
  );
}

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "none", // Remove border
    boxShadow: "none", // Remove box shadow
    padding: "0.45rem 0px",
    background: "transparent",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "0px", // Adjust the padding as needed
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

let timeId = "";
const SelectField = (props) => {
  let {
    label = "",
    name = "",
    containerClass = "",
    required = false,
    labelClass = "",
    inputClass = "",
    placeholder = "",
    options = [],
    onChange = () => {},
    defaultValue = "",
    errorElement = "span",
    errorMessageClassName = "",
    title = "name",
    value = "value",
    inputContainerClass = "",
    leftIcon = "",
    leftIconClass = "",
  } = props;

  const formDetails = useSelector((state) => state?.FormDetails);
  let message = fielError(name, formDetails?.errors);
  let optionsList = options.map((item) =>
    isObject(item)
      ? { ...item, label: item?.[title], value: item?.[value] }
      : { label: item, value: item }
  );

  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleSelectChange = (option) => {
    setSelectedOption(option);
    clearTimeout(timeId);
    timeId = setTimeout(() => {
      onChange({ target: { name, type: "select", value: option } });
    }, 500);
  };

  return (
    <div className="w-full flex flex-col gap-2.5 z-0">
      <div className="input-container">
        <div className={`${name} flex flex-col gap-2.5 ${containerClass}`}>
          <label
            className={`text-[#17181C] font-bold text-nowrap ${labelClass}`}
            htmlFor={`${name}Id`}
          >
            {label}
          </label>
          <div
            aria-hidden="true"
            className={`border px-4 border-[#BBBDC8] rounded-md flex gap-2 items-center min-w-max ${inputContainerClass}`}
          >
            {leftIcon && (
              <div className={`w-[1.5rem] ${leftIconClass}`}>{leftIcon}</div>
            )}
            <Select
              className={`appearance-none w-full bg-transparent outline-none text-wrap outline-none border-none ${inputClass}`}
              id={`${name}Id`}
              value={selectedOption}
              placeholder={placeholder}
              onChange={handleSelectChange}
              options={optionsList}
              styles={customStyles}
              required={required}
              components={{
                DropdownIndicator: () => (
                  <ChevronDownIcon className="size-6" aria-hidden="true" />
                ),
              }}
            ></Select>
          </div>
          <div className="hidden">
            <select name={name} defaultValue={JSON.stringify(selectedOption)}>
              <option value={JSON.stringify(selectedOption)}>
                {selectedOption?.label}
              </option>
            </select>
          </div>
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

export default SelectField;
