interface InputFieldProps {
  legend: string;
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  required?: boolean;
  name: string;
}

export function InputField({
  legend,
  label,
  type = 'text',
  placeholder,
  required = false,
  name,
}: InputFieldProps) {
  return (
    <div className='fieldset'>
      <legend className='fieldset-legend'>{legend}</legend>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className='input input-bordered w-full'
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
