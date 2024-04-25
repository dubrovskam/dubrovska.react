/* eslint-disable react/prop-types */
// * Base
import cn from 'classnames';

// * Styles
import styles from './Field.module.css';

const Field = ({
  title,
  type = 'text',
  name,
  value,
  textarea,
  placeholder, 
  error,
  onChange,
  onBlur,
}) => {
  if (textarea) {
    return (
      <>
        <label className={styles.label}>
          {title && <div className={styles.title}>{title}</div>}
          <textarea
            className={cn([styles.input, styles.textarea])}
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
  }

  return (
    <>
      <label className={styles.label}>
        {title && <div className={styles.title}>{title}</div>}
        <input
          className={styles.input}
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
