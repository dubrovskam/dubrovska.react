/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// * Base
import cn from 'classnames';

// * Styles
import styles from './Button.module.css';

const Button = ({
  text = 'Default text',
  type = 'button',
  disabled = false,
  color,
  href = '',
  onClick,
}) => {
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
      // console.log(':)');
    }
  }

  if (href)
    return (
      <Link text={text} href={href} onClick={onClick} styleList={styleList} />
    );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(styles.button, styleList)}
    >
      <span>{text}</span>
    </button>
  );
};

const Link = ({ text, href, onClick, styleList }) => {
  return (
    <a target="_blank" href={href} onClick={onClick} classNames={cn(styleList)}>
      <span>{text}</span>
    </a>
  );
};

export default Button;
