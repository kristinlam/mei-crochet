import React from 'react';
import classNames from 'classnames';

const Section = ({ children, backgroundColor, textColor, ...rest }) => {
  const classes = classNames(
    'flex flex-col items-center text-center justify-center py-20 px-8 sm:px-14',
    backgroundColor,
    textColor,
    rest.className
  );
  return (
    <section {...rest} className={classes}>
      {children}
    </section>
  );
};

export default Section;
