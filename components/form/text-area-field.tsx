interface TextAreaFieldProps {
  legend: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  name: string;
  rows?: number;
}

export function TextAreaField({
  legend,
  label,
  placeholder,
  required = false,
  name,
  rows = 4,
}: TextAreaFieldProps) {
  return (
    <div className='fieldset'>
      <legend className='fieldset-legend'>{legend}</legend>
      <textarea
        className='textarea textarea-bordered'
        placeholder={placeholder}
        required={required}
        name={name}
        rows={rows}
      />
      <label
        htmlFor={name}
        className='fieldset-label'
      >
        {label}
      </label>
    </div>
  );
}
