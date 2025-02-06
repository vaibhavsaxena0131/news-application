import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { fielError } from "@/utills/fieldError";

function isObject(objValue) {
  return (
    objValue && typeof objValue === "object" && objValue.constructor === Object
  );
}

const AutocompleteField = (props) => {
  let {
    label = "",
    name = "",
    isMultiple = false,
    placeholder = "",
    containerClass = "flex flex-col gap-2.5",
    labelClass = "",
    options = [],
    defaultValue = isMultiple ? [] : "",
    errorElement = "span",
    errorMessageClassName = "",
    title = "name",
    showCheck = true,
    onSelect = () => {},
    selected = isMultiple ? [] : "",
  } = props;

  const [query, setQuery] = useState("");
  let optionsIsObject = options.length > 0 ? isObject(options[0]) : false;

  const formDetails = useSelector((state) => state?.FormDetails);
  let message = fielError(name, formDetails?.errors);

  const filteredPeople =
    query === ""
      ? options
      : options.filter((option) =>
          (optionsIsObject ? option?.[title] : option)
            ?.toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-full flex flex-col gap-2.5">
      <div className="input-container">
        <div className={`${name} relative ${containerClass}`}>
          <label
            className={`text-[#17181C] font-bold ${labelClass}`}
            htmlFor={`${name}Id`}
          >
            {label}
          </label>
          <Combobox
            value={selected || defaultValue}
            placeholder={placeholder}
            multiple={isMultiple}
            onChange={onSelect}
            name={name}
          >
            <div className="">
              <ComboboxButton className="flex items-center pr-2 w-full">
                <div
                  aria-hidden="true"
                  className="w-full px-4 py-3 border border-[#BBBDC8] rounded-md flex items-center "
                >
                  <ComboboxInput
                    className="w-full outline-none bg-transparent"
                    displayValue={(value) =>
                      optionsIsObject ? value?.[title] : value
                    }
                    onChange={(event) => setQuery(event.target.value)}
                    autoComplete="off"
                  />
                  <ChevronDownIcon
                    className={`ml-2 h-5 w-5 transition duration-150 ease-in-out`}
                    aria-hidden="true"
                  />
                </div>
              </ComboboxButton>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <ComboboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[9999]">
                  {filteredPeople.length === 0 && query !== "" ? (
                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredPeople.map((option) =>
                      optionsIsObject ? (
                        <ComboboxOption
                          key={option.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? "text-balck-900" : "text-gray-900"
                            }`
                          }
                          value={option}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {option?.[title]}
                              </span>
                              {selected && showCheck ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 text-black-600`}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </ComboboxOption>
                      ) : (
                        <ComboboxOption
                          key={option}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? "text-balck-900" : "text-gray-900"
                            }`
                          }
                          value={option}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {option}
                              </span>
                              {selected && showCheck ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? "text-white" : "text-black-600"
                                  }`}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </ComboboxOption>
                      )
                    )
                  )}
                </ComboboxOptions>
              </Transition>
            </div>
          </Combobox>
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

export default AutocompleteField;
