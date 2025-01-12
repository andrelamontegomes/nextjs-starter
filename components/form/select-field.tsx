interface SelectFieldProps {
  legend: string;
  label?: string;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  required?: boolean;
  name: string;
}

export function SelectField({
  legend,
  label,
  options,
  placeholder,
  required = false,
  name,
}: SelectFieldProps) {
  return (
    <div className='fieldset'>
      <legend className='fieldset-legend'>{legend}</legend>
      <select
        className='select select-bordered w-full'
        name={name}
        required={required}
      >
        {placeholder && (
          <option
            value=''
            disabled
            selected
          >
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={name}
        className='fieldset-label'
      >
        {label}
      </label>
    </div>
  );
}
