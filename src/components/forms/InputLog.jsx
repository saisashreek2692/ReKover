/* eslint-disable react/prop-types */
const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

export default function InputLog({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  placeholder,
  customClass,
}) {
  return (
    <div className="my-5">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        className={fixedInputClass + customClass}
        placeholder={placeholder}
      />
    </div>
  );
}