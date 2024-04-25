/* eslint-disable react/prop-types */
// * Base
import cn from 'classnames';

// * Styles
import styles from './Icon.module.css';

// * Data
import ICONS from './Icon.data';

const Icon = ({ className = [], icon }) => {
  return (
    <svg className={cn([styles.icon, ...className])} viewBox="0 0 32 32">
      {ICONS[icon]}
    </svg>
  );
};

export default Icon;
