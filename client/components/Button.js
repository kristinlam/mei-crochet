import React from 'react';
import classNames from 'classnames';

const Button = ({
  children,
  backgroundColor,
  textColor,
  border,
  dropShadow,
  ...rest
}) => {
  const classes = classNames(
    'font-serif rounded-full px-4 py-3',
    backgroundColor || 'bg-yellow',
    textColor || 'text-orange',
    border && 'border-2',
    dropShadow || 'drop-shadow-orange-sm',
    rest.className
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
