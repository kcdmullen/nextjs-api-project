import styles from './element.module.css';

interface InputProps {
  id: string;
  label: string;
  type: string;
}

export default function Select({ id, label, type }: InputProps) {
  return (
    <div className={styles.elementWrapper}>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        name={id}
        id={id}
        type={type}
        className={styles.customFormElement}
      />
    </div>
  );
}
