// * Base
import cn from 'classnames';

// * Styles
import styles from './Button.module.css';

// eslint-disable-next-line react/prop-types
const Button = ({ text = 'Default text', type = 'button', color, onClick }) => {
  const styleList = [styles.button];

  switch (color) {
    case 'orange': {
      styleList.push(styles.orange);
      break;
    }
    case 'red': {
      styleList.push(styles.red);
      break;
    }
    default: {
      console.log(':)');
    }
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(styles.button, styleList)}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
