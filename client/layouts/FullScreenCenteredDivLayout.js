import React from 'react';
import classNames from 'classnames';

const FullScreenCenteredDivLayout = ({
  children,
  backgroundColor,
  textColor,
  heading,
  ...rest
}) => {
  const classes = classNames(
    'min-h-screen flex flex-col items-center justify-center',
    backgroundColor,
    textColor,
    rest.className
  );

  return (
    <div {...rest} className={classes}>
      <h1 className="mb-8">{heading}</h1>
      {children}
    </div>
  );
};

export default FullScreenCenteredDivLayout;
