/* eslint-disable react/prop-types */
import styles from './Field.module.css';

const Field = ({
  title,
  type = 'text',
  name,
  value,
  placeholder,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <>
      <label className={styles.label}>
        {title && <div className={styles.title}>{title}</div>}
        <input className={styles.input}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
        <div className={styles.error}>{error || ''}</div>
      </label>
    </>
  );
};

export default Field;
