import React, {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  LegacyRef,
} from 'react';
import pick from 'lodash/pick';

import Typography from '../../Typography';
// import styles from './Blank.module.scss';

// When you want to wrap another element in a button but don't want any button styles from the browser.
// If it's clickable it should probably be a button or a link
export type Props = {
  nativeElRef?: LegacyRef<HTMLButtonElement>;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const Blank = ({
  className = '',
  children,
  style,
  nativeElRef,
  ...rest
}: Props) => (
  <button
    style={style}
    // className={`${styles.ButtonBlank} ${className}`}
    ref={nativeElRef}
    {...rest}
  >
    <Typography style={pick(style, 'color', 'fontSize')}>{children}</Typography>
  </button>
);

export default Blank;
