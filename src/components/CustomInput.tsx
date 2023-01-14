import React from "react";

type Props = {
  type: React.HTMLInputTypeAttribute | undefined;
  id: string | undefined;
  placeholder: string | undefined;
  value: string | ReadonlyArray<string> | number | undefined;
  labelName: string;
  required: boolean | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const CustomInput = ({
  type,
  id,
  placeholder,
  value,
  labelName,
  required,
  onChange,
}: Props) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelName}
      </label>
      <input
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
