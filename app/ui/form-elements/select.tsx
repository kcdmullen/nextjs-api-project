import styles from './element.module.css';

interface SelectProps {
  id: string;
  label: string;
  options: string[]; // Assuming options is an array of strings
}
// Ensure that categories is an array of strings (e.g., ['HR', 'Finance', 'IT']).
// If it's not, you might need to adjust the options type in the SelectProps interface.
// For example, if each category is an object, you might use Array<{ value: string; label: string }>
// instead.

// Not as below, bc have to send only one prop with react...
// export default function Select(id: string, label: string, options: Array<[]>) {
export default function Select({ id, label, options }: SelectProps) {
  return (
    <div className={styles.elementWrapper}>
      <label htmlFor={id}>{label}</label>
      <br />
      <select name={id} id={id} className={styles.customFormElement}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
