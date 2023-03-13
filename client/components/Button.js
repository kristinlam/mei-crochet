import React from 'react';
import classNames from 'classnames';

const Button = ({ children, backgroundColor, textColor, border, ...rest }) => {
  const classes = classNames(
    'font-serif drop-shadow-[6px_6px_rgb(230,90,10)] rounded-full px-4 py-3',
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
