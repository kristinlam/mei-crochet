import React from 'react';
import classNames from 'classnames';

const Button = ({ children, backgroundColor, textColor, border, ...rest }) => {
  const classes = classNames(
    'drop-shadow-[6px_6px_rgb(244,122,59)] rounded-full',
    backgroundColor,
    textColor,
    border ? `border-${border}` : '',
    rest.className
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
