/* Input --------------------------- */

interface InputProps {
  id: string;
  label: string;
  type: string;
}

export function Input({ id, label, type }: InputProps) {
  return (
    <div className='mb-3'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <input name={id} id={id} type={type} className='form-control' />
    </div>
  );
}

/* Select --------------------------- */

interface SelectProps {
  id: string;
  label: string;
  options: string[]; // Assuming options is an array of strings
}
// Ensure that categories is an array of strings (e.g., ['HR', 'Finance', 'IT']).
// If it's not, you might need to adjust the options type in the SelectProps interface.
// For example, if each category is an object, you might use Array<{ value: string; label: string }>
// instead.

// Not as in the line below, bc have to send only one prop with react...
// export default function Select(id: string, label: string, options: Array<[]>) {
export function Select({ id, label, options }: SelectProps) {
  return (
    <div className='mb-3'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <select name={id} id={id} className='form-select'>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

/* Button --------------------------- */

interface ButtonProps {
  label: string;
  buttonClass?: string;
  // ? indicates optional
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  label,
  buttonClass = 'btn-primary',
  type = 'button',
}: ButtonProps) {
  return (
    <button type={type} className={`btn ${buttonClass}`}>
      {label}
    </button>
  );
}
