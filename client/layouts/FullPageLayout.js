import React from 'react';
import classNames from 'classnames';

const FullPageLayout = ({
  children,
  backgroundColor,
  textColor,
  heading,
  ...rest
}) => {
  const classes = classNames(
    'max-w-screen-2xl py-10 px-6',
    backgroundColor,
    textColor,
    rest.className
  );

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

export default FullPageLayout;
